#!/usr/bin/env node
/**
 * build-jobs-html.js — render every tracked job into one self-contained,
 * print-friendly HTML report: Jobs/jobs-report.html.
 *
 *   node scripts/build-jobs-html.js            (also: npm run job html)
 *
 * Reads the same Jobs/<company>/<role>/job.json files as the CLI and API.
 * White background, restrained editorial styling, no external assets.
 */

const fs = require('fs');
const path = require('path');
const L = require('./lib/jobs');

const OUT = path.join(L.JOBS_DIR, 'jobs-report.html');

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const tier = (score) => (score == null ? 'none' : score >= 6.5 ? 'good' : score >= 5 ? 'mid' : 'low');
const fmtDate = (d) =>
  d ? new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '—';

function companyMeta(companySlug) {
  try {
    return JSON.parse(fs.readFileSync(path.join(L.JOBS_DIR, companySlug, 'company.json'), 'utf8'));
  } catch {
    return null;
  }
}

function scoreTable(fit) {
  if (!fit || !fit.criteria || !fit.criteria.length) {
    return '<p class="muted">No scored criteria for this role yet.</p>';
  }
  const totalW = fit.criteria.reduce((s, c) => s + (c.weight || 0), 0) || 1;
  const rows = fit.criteria
    .map((c) => {
      const weighted = (c.score || 0) * (c.weight || 0);
      return `<tr>
        <td class="crit">${esc(c.name)}${c.note ? `<span class="note">${esc(c.note)}</span>` : ''}</td>
        <td class="num">${(c.weight * 100).toFixed(0)}%</td>
        <td class="num">${c.score}<span class="of">/10</span></td>
        <td class="num">${weighted.toFixed(2)}</td>
        <td class="barcell"><span class="bar"><i class="${tier(c.score)}" style="width:${c.score * 10}%"></i></span></td>
      </tr>`;
    })
    .join('\n');
  const weightedTotal = fit.criteria.reduce((s, c) => s + (c.score || 0) * (c.weight || 0), 0);
  const computed = Math.round((weightedTotal / totalW) * 10) / 10;
  return `<table class="score">
    <thead><tr><th>Criterion</th><th class="num">Weight</th><th class="num">Score</th><th class="num">Weighted</th><th></th></tr></thead>
    <tbody>${rows}</tbody>
    <tfoot><tr>
      <td>Weighted fit score${
        fit.score != null && fit.score !== computed ? ` <span class="note">stored ${fit.score}; Σ(weight×score) ÷ Σweight = ${computed}</span>` : ''
      }</td>
      <td class="num">${(totalW * 100).toFixed(0)}%</td><td></td>
      <td class="num total ${tier(fit.score ?? computed)}">${(fit.score ?? computed).toFixed(1)}</td>
      <td class="barcell"><span class="bar"><i class="${tier(fit.score ?? computed)}" style="width:${(fit.score ?? computed) * 10}%"></i></span></td>
    </tr></tfoot>
  </table>`;
}

function list(items) {
  if (!items || !items.length) return '';
  return `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
}

const EFFORT = { S: 'Small', M: 'Medium', L: 'Large' };

/** "Raising this score" — rendered for any role that carries an improvement plan. */
function improvementSection(d) {
  if (!d.improvementPlan) return '';
  const p = d.improvementPlan;
  const rows = (p.actions || [])
    .map(
      (a, i) => `<tr>
        <td class="num">${i + 1}</td>
        <td class="crit">${esc(a.do)}
          ${a.leverages ? `<span class="note"><strong>Leverages:</strong> ${esc(a.leverages)}</span>` : ''}
          <span class="note">${esc(a.why)}</span></td>
        <td>${a.lifts ? esc(a.lifts) : ''}</td>
        <td class="num">${a.effort ? esc(EFFORT[a.effort] || a.effort) : ''}</td>
      </tr>`
    )
    .join('\n');
  return `<div class="raise">
    <h3>Raising this score</h3>
    ${p.summary ? `<p class="raise-sum">${esc(p.summary)}</p>` : ''}
    <table class="score raise-table">
      <thead><tr><th>#</th><th>Action</th><th>Lifts</th><th class="num">Effort</th></tr></thead>
      <tbody>${rows}</tbody>
      ${
        p.targetScore != null
          ? `<tfoot><tr><td colspan="2">Projected fit if executed</td><td></td>
              <td class="num total ${tier(p.targetScore)}">${p.targetScore.toFixed(1)}</td></tr></tfoot>`
          : ''
      }
    </table>
  </div>`;
}

function linkList(links) {
  if (!links || !links.length) return '';
  return `<p class="links">${links
    .map((l) => {
      const ext = /^https?:/.test(l.path);
      return ext
        ? `<a href="${esc(l.path)}">${esc(l.label)} &#8599;</a>`
        : `<span class="local">${esc(l.label)}: <code>${esc(l.path)}</code></span>`;
    })
    .join(' &nbsp;·&nbsp; ')}</p>`;
}

function jobSection(entry, index) {
  const d = entry.data;
  const fit = d.fit || {};
  const meta = [
    d.team,
    d.location,
    d.postingType,
    d.dates && d.dates.applied ? `Applied ${fmtDate(d.dates.applied)}` : null,
    d.resumeVariant ? `Résumé: ${d.resumeVariant}` : null,
    d.priority ? `Priority ${d.priority}/5` : null,
  ]
    .filter(Boolean)
    .map(esc)
    .join('<span class="dot">·</span>');

  return `<section class="job" id="${esc(entry.id.replace(/\//g, '--'))}">
    <div class="job-head">
      <div class="job-index">${String(index + 1).padStart(2, '0')}</div>
      <div>
        <h2>${esc(d.role)}</h2>
        <div class="job-co">${esc(d.company)}</div>
        <div class="job-meta">${meta}</div>
      </div>
      <div class="job-score ${tier(fit.score)}">
        <span class="job-score-n">${fit.score != null ? fit.score.toFixed(1) : '—'}</span>
        <span class="job-score-l">fit / 10</span>
      </div>
    </div>

    <div class="statusline"><span class="pill ${esc(d.status)}">${esc(d.status)}</span>
      ${d.nextAction ? `<span class="next"><strong>Next:</strong> ${esc(d.nextAction)}</span>` : ''}</div>

    ${fit.verdict ? `<p class="verdict">${esc(fit.verdict)}</p>` : ''}

    ${scoreTable(fit)}

    <div class="cols">
      <div><h3>Strengths</h3>${list(fit.strengths) || '<p class="muted">—</p>'}</div>
      <div><h3>Gaps</h3>${list(fit.gaps) || '<p class="muted">—</p>'}</div>
    </div>

    ${improvementSection(d)}

    ${linkList(d.links)}
    <p class="files muted">Detail: <code>Jobs/${esc(entry.id)}/posting.md</code> &nbsp;·&nbsp; <code>fit-analysis.md</code></p>
  </section>`;
}

function build() {
  const jobs = L.allJobs(); // sorted priority desc
  const ranked = [...jobs].sort((a, b) => (b.data.fit?.score ?? -1) - (a.data.fit?.score ?? -1));

  const summaryRows = ranked
    .map((j, i) => {
      const d = j.data;
      const s = d.fit?.score;
      return `<tr>
        <td class="num">${i + 1}</td>
        <td><a href="#${esc(j.id.replace(/\//g, '--'))}">${esc(d.role)}</a><span class="sub">${esc(d.company)}</span></td>
        <td><span class="pill ${esc(d.status)}">${esc(d.status)}</span></td>
        <td class="num"><span class="chip ${tier(s)}">${s != null ? s.toFixed(1) : '—'}</span>${
          d.improvementPlan
            ? `<span class="sub">plan &rarr; ${d.improvementPlan.targetScore != null ? d.improvementPlan.targetScore.toFixed(1) : '?'} &darr;</span>`
            : ''
        }</td>
        <td class="verdict-cell">${esc((d.fit?.verdict || '').split('. ')[0])}${d.fit?.verdict ? '.' : ''}</td>
      </tr>`;
    })
    .join('\n');

  const companies = [...new Set(jobs.map((j) => j.companySlug))]
    .map((slug) => {
      const m = companyMeta(slug);
      return m ? `<li><strong>${esc(m.name)}</strong> — ${esc(m.industry || '')}</li>` : '';
    })
    .filter(Boolean)
    .join('');

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Job Applications — Fit Analysis</title>
<style>
  :root {
    --ink: #1a1a1a; --soft: #3f3f3f; --muted: #757575; --hair: #e4e4e4;
    --accent: #0f4c5c; --good: #1a7f4b; --mid: #9a6a00; --low: #b23b2e; --none: #9a9a9a;
  }
  * { box-sizing: border-box; }
  /* Type scale is rem-based off an 18px root, so the report reads correctly at
     the browser's default 100% zoom with no squinting. */
  html { font-size: 18px; }
  body {
    margin: 0; background: #fff; color: var(--soft);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 1rem; line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  .wrap { max-width: 46rem; margin: 0 auto; padding: 3.5rem 2.25rem 6rem; }
  h1, h2, h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.01em; }
  h1 { font: 600 2rem/1.2 Georgia, "Times New Roman", serif; margin: 0 0 0.35rem; letter-spacing: -0.02em; }
  .lede { color: var(--muted); margin: 0 0 0.25rem; font-size: 1rem; }
  .rule { height: 1px; background: var(--hair); margin: 2rem 0; border: 0; }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  code { font: 0.85em/1.5 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #f6f6f4; padding: 0.05em 0.35em; border-radius: 3px; color: var(--soft); }
  .muted { color: var(--muted); }

  /* Methodology */
  .method { background: #fafaf9; border: 1px solid var(--hair); border-radius: 8px; padding: 1.1rem 1.35rem; margin: 1.75rem 0; font-size: 0.95rem; }
  .method h3 { margin: 0 0 0.5rem; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
  .method p { margin: 0.4rem 0; }
  .method ul { margin: 0.4rem 0 0; padding-left: 1.2rem; }

  /* Summary table */
  table.summary { width: 100%; border-collapse: collapse; margin: 0.5rem 0 0; font-size: 0.95rem; }
  table.summary th { text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted); border-bottom: 2px solid var(--ink); padding: 0.5rem 0.6rem; }
  table.summary td { padding: 0.75rem 0.6rem; border-bottom: 1px solid var(--hair); vertical-align: top; }
  table.summary td a { font-weight: 600; }
  .sub { display: block; color: var(--muted); font-size: 0.8rem; margin-top: 0.1rem; }
  .verdict-cell { color: var(--muted); font-size: 0.88rem; max-width: 22rem; }
  .num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
  table.summary td.num { text-align: right; }

  .chip, .job-score-n { font-variant-numeric: tabular-nums; }
  .chip { display: inline-block; min-width: 2.1rem; text-align: center; padding: 0.12rem 0.45rem; border-radius: 4px; font-weight: 700; font-size: 0.9rem; background: #f0f0ef; color: var(--ink); }
  .chip.good, .total.good, .job-score.good .job-score-n { color: var(--good); }
  .chip.mid, .total.mid, .job-score.mid .job-score-n { color: var(--mid); }
  .chip.low, .total.low, .job-score.low .job-score-n { color: var(--low); }
  .chip.good { background: #e8f3ec; } .chip.mid { background: #f6efe0; } .chip.low { background: #f6e8e5; }

  .pill { display: inline-block; padding: 0.15rem 0.55rem; border-radius: 999px; font-size: 0.72rem; letter-spacing: 0.04em; text-transform: uppercase; border: 1px solid var(--hair); color: var(--muted); background: #fff; }
  .pill.applied, .pill.screen { color: var(--accent); border-color: #bcd7de; background: #f0f7f9; }
  .pill.interview, .pill.offer { color: var(--good); border-color: #bfe0cc; background: #eef6f1; }
  .pill.rejected, .pill.withdrawn { color: var(--low); border-color: #e6c9c4; background: #f9efed; }

  /* Job section */
  section.job { border-top: 1px solid var(--hair); padding-top: 2.5rem; margin-top: 2.5rem; }
  .job-head { display: grid; grid-template-columns: 2.5rem 1fr auto; gap: 1rem; align-items: start; }
  .job-index { font: 600 1rem/1.5 Georgia, serif; color: var(--muted); padding-top: 0.2rem; }
  .job-head h2 { margin: 0 0 0.1rem; font-size: 1.3rem; }
  .job-co { color: var(--soft); font-weight: 500; font-size: 1rem; }
  .job-meta { color: var(--muted); font-size: 0.82rem; margin-top: 0.35rem; }
  .job-meta .dot { margin: 0 0.45rem; color: var(--hair); }
  .job-score { text-align: right; }
  .job-score-n { display: block; font: 600 1.85rem/1 Georgia, serif; color: var(--ink); }
  .job-score-l { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }

  .statusline { margin: 1rem 0 0.25rem; display: flex; gap: 0.75rem; align-items: baseline; flex-wrap: wrap; }
  .statusline .next { font-size: 0.92rem; color: var(--soft); }
  .verdict { font-size: 0.97rem; color: var(--soft); background: #fafaf9; border-left: 3px solid var(--accent); padding: 0.8rem 1rem; margin: 1rem 0 1.4rem; border-radius: 0 4px 4px 0; }

  /* Score table */
  table.score { width: 100%; border-collapse: collapse; margin: 0.75rem 0 0.5rem; font-size: 0.92rem; }
  table.score th { text-align: left; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted); border-bottom: 1px solid var(--ink); padding: 0.45rem 0.6rem; }
  table.score td { padding: 0.65rem 0.6rem; border-bottom: 1px solid var(--hair); vertical-align: top; }
  table.score .crit { width: 55%; }
  table.score .crit .note { display: block; color: var(--muted); font-size: 0.8rem; margin-top: 0.2rem; }
  table.score .of { color: var(--muted); font-size: 0.72rem; }
  table.score tfoot td { border-bottom: 0; border-top: 2px solid var(--ink); font-weight: 600; color: var(--ink); padding-top: 0.8rem; }
  table.score tfoot .note { display: block; font-weight: 400; color: var(--muted); font-size: 0.72rem; margin-top: 0.1rem; }
  .total { font: 600 1.1rem/1 Georgia, serif; }
  .barcell { width: 6rem; }
  .bar { display: block; height: 7px; background: #eee; border-radius: 4px; overflow: hidden; }
  .bar i { display: block; height: 100%; border-radius: 4px; background: var(--none); }
  .bar i.good { background: var(--good); } .bar i.mid { background: var(--mid); } .bar i.low { background: var(--low); }

  /* Raising this score */
  .raise { margin: 1.6rem 0 0.5rem; padding: 1.1rem 1.25rem 0.5rem; background: #f7faf9; border: 1px solid #d9e6e2; border-radius: 8px; }
  .raise h3 { margin: 0 0 0.4rem; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent); }
  .raise-sum { font-size: 0.92rem; color: var(--soft); margin: 0 0 0.6rem; }
  table.raise-table { margin-bottom: 0.5rem; }
  table.raise-table th { border-bottom-color: var(--accent); }
  table.raise-table .crit .note { margin-top: 0.25rem; }

  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; margin: 1.4rem 0 0.5rem; }
  .cols h3 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.07em; color: var(--muted); margin: 0 0 0.4rem; }
  .cols ul { margin: 0; padding-left: 1.1rem; font-size: 0.92rem; }
  .cols li { margin-bottom: 0.3rem; }

  .links { font-size: 0.88rem; margin: 1rem 0 0.25rem; }
  .links .local { color: var(--muted); }
  .files { font-size: 0.8rem; margin: 0.4rem 0 0; }

  footer { margin-top: 4rem; padding-top: 1.25rem; border-top: 1px solid var(--hair); font-size: 0.8rem; color: var(--muted); }

  @media (max-width: 40rem) {
    html { font-size: 17px; }
    .wrap { padding: 2.5rem 1.25rem 4rem; }
    .job-head { grid-template-columns: 1fr auto; }
    .job-index { display: none; }
    .cols { grid-template-columns: 1fr; gap: 1rem; }
    .verdict-cell { display: none; }
  }
  @media print {
    html { font-size: 11.5pt; }
    .wrap { max-width: none; padding: 0; }
    section.job { break-inside: avoid; border-top: 1px solid #ccc; }
    .method, .verdict { background: #fff; }
    a { color: var(--ink); }
  }
</style>
</head>
<body>
<div class="wrap">
  <h1>Job Applications &mdash; Fit Analysis</h1>
  <p class="lede">Leroy Ross &middot; ${jobs.length} role${jobs.length === 1 ? '' : 's'} tracked</p>
  <p class="lede muted">Generated ${fmtDate(L.today())} from <code>Jobs/</code>. Regenerate with <code>npm run job html</code>.</p>

  <div class="method">
    <h3>How the fit score works</h3>
    <p>Each role is scored against criteria drawn straight from its job description. Every criterion gets a <strong>weight</strong> (how much the posting emphasises it; weights sum to 100%) and a <strong>raw score</strong> from 0&ndash;10 (how well the evidence &mdash; résumé plus the live production codebases &mdash; supports it).</p>
    <p>The role&rsquo;s <strong>fit score</strong> is the weighted average: <code>&Sigma;(weight &times; score) &divide; &Sigma;weight</code>, on a 0&ndash;10 scale. Bands: <span class="chip good">6.5+</span> apply now &nbsp; <span class="chip mid">5.0&ndash;6.4</span> borderline &nbsp; <span class="chip low">&lt;5.0</span> long shot.</p>
    <p>Some roles carry a <strong>&ldquo;Raising this score&rdquo;</strong> block &mdash; concrete moves built on what Paintbrush already has (the client-work library, the shipped products, the code-level design system, the AI pipeline, the client network) and the score they&rsquo;d project to if done.</p>
    ${companies ? `<ul>${companies}</ul>` : ''}
  </div>

  <h3 style="font-size:.78rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:2rem 0 .25rem">Ranked by fit</h3>
  <table class="summary">
    <thead><tr><th>#</th><th>Role</th><th>Status</th><th class="num">Fit</th><th>Read</th></tr></thead>
    <tbody>${summaryRows}</tbody>
  </table>

  ${ranked.map((j, i) => jobSection(j, i)).join('\n')}

  <footer>
    Fit scores are judgement calls, not guarantees. Weights and raw scores live in each role&rsquo;s
    <code>job.json</code>; the reasoning is in <code>fit-analysis.md</code>. This report is generated &mdash; edits belong in the source files.
  </footer>
</div>
</body>
</html>`;

  fs.writeFileSync(OUT, html);
  return { out: OUT, count: jobs.length };
}

if (require.main === module) {
  const r = build();
  console.log(`Wrote ${r.out} (${r.count} roles)`);
}

module.exports = { build, OUT };
