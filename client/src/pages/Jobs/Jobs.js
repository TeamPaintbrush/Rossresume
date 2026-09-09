import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MiniMarkdown from '../../utils/miniMarkdown';
import './Jobs.css';

const STATUS_ORDER = ['identified', 'drafting', 'applied', 'screen', 'interview', 'offer', 'rejected', 'withdrawn', 'on-hold'];

// The generated report is served by the API server, not the CRA dev server.
const REPORT_URL = (process.env.REACT_APP_API_URL || 'http://localhost:5561/api').replace(/\/api\/?$/, '') + '/jobs-report.html';

const fitClass = (s) => (s == null ? 'none' : s >= 6.5 ? 'good' : s >= 5 ? 'mid' : 'low');
const fmtDate = (d) => (d ? new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—');

function FitBadge({ score }) {
  return <span className={`fit-badge ${fitClass(score)}`}>{score == null ? '–' : score.toFixed(1)}</span>;
}

function JobCard({ job, active, onClick }) {
  return (
    <button className={`job-card ${active ? 'is-active' : ''}`} onClick={onClick} type="button">
      <div className="job-card-top">
        <FitBadge score={job.fit?.score} />
        <span className="job-card-pri" title={`priority ${job.priority}`}>
          {'●'.repeat(job.priority || 0)}{'○'.repeat(Math.max(0, 5 - (job.priority || 0)))}
        </span>
      </div>
      <div className="job-card-role">{job.role}</div>
      <div className="job-card-co">{job.company}</div>
      {job.nextAction && <div className="job-card-next">↳ {job.nextAction}</div>}
    </button>
  );
}

function Scorecard({ fit }) {
  if (!fit || !fit.criteria || !fit.criteria.length) return null;
  return (
    <div className="scorecard">
      {fit.criteria.map((c, i) => (
        <div className="score-row" key={i}>
          <div className="score-head">
            <span className="score-name">{c.name}</span>
            <span className="score-num">{c.score}/10 <em>w{c.weight}</em></span>
          </div>
          <div className="score-bar"><span style={{ width: `${c.score * 10}%` }} className={fitClass(c.score)} /></div>
          {c.note && <div className="score-note">{c.note}</div>}
        </div>
      ))}
    </div>
  );
}

const EFFORT_LABEL = { S: 'Small', M: 'Medium', L: 'Large' };

function ImprovementPlan({ plan }) {
  return (
    <div className="raise">
      <h4>Raising this score</h4>
      {plan.summary && <p className="raise-sum">{plan.summary}</p>}
      <ol className="raise-list">
        {(plan.actions || []).map((a, i) => (
          <li key={i}>
            <div className="raise-do">{a.do}</div>
            {a.leverages && <div className="raise-lev"><strong>Leverages:</strong> {a.leverages}</div>}
            <div className="raise-why">{a.why}</div>
            <div className="raise-meta">
              {a.lifts && <span className="raise-lift">{a.lifts}</span>}
              {a.effort && <span className="raise-eff">{EFFORT_LABEL[a.effort] || a.effort} effort</span>}
            </div>
          </li>
        ))}
      </ol>
      {plan.targetScore != null && (
        <p className="raise-target">
          Projected fit if executed: <strong className={fitClass(plan.targetScore)}>{plan.targetScore.toFixed(1)}</strong>
        </p>
      )}
    </div>
  );
}

function JobDetail({ id, onChanged }) {
  const [job, setJob] = useState(null);
  const [err, setErr] = useState(null);
  const [tab, setTab] = useState('fit');
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    setErr(null);
    axios.get(`/api/jobs/${id}`).then((r) => setJob(r.data)).catch((e) => setErr(e.message));
  }, [id]);

  useEffect(() => { setJob(null); setTab('fit'); load(); }, [load]);

  const patch = async (body) => {
    setBusy(true);
    try {
      const r = await axios.patch(`/api/jobs/${id}`, body);
      setJob(r.data.job);
      onChanged && onChanged();
    } catch (e) { setErr(e.message); } finally { setBusy(false); }
  };

  const addNote = async () => {
    if (!note.trim()) return;
    setBusy(true);
    try {
      const r = await axios.post(`/api/jobs/${id}/notes`, { text: note.trim() });
      setJob(r.data.job);
      setNote('');
      setTab('notes');
    } catch (e) { setErr(e.message); } finally { setBusy(false); }
  };

  if (err) return <div className="detail"><p className="api-warn">Couldn’t load job: {err}</p></div>;
  if (!job) return <div className="detail"><p className="muted">Loading…</p></div>;

  const docTabs = [
    ['fit', 'Fit'],
    ['posting', 'Posting'],
    ['analysis', 'Analysis'],
    ['notes', 'Notes'],
    ['history', 'History'],
  ];

  return (
    <div className="detail">
      <div className="detail-head">
        <h2>{job.role}</h2>
        <div className="detail-co">{job.company}{job.team ? ` · ${job.team}` : ''}</div>
        <div className="detail-meta">
          {job.location && <span>{job.location}</span>}
          {job.dates?.applied && <span>Applied {fmtDate(job.dates.applied)}</span>}
          {job.resumeVariant && <span>Résumé: {job.resumeVariant}</span>}
        </div>
      </div>

      <div className="detail-controls">
        <label>
          Status
          <select value={job.status} disabled={busy} onChange={(e) => patch({ status: e.target.value })}>
            {STATUS_ORDER.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label>
          Priority
          <select value={job.priority || 3} disabled={busy} onChange={(e) => patch({ priority: Number(e.target.value) })}>
            {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <span className="detail-fit"><FitBadge score={job.fit?.score} />{job.fit?.computed != null && job.fit.computed !== job.fit.score && <em> (calc {job.fit.computed})</em>}</span>
      </div>

      {job.nextAction && <div className="detail-next"><strong>Next:</strong> {job.nextAction}</div>}

      {job.links && job.links.length > 0 && (
        <div className="detail-links">
          {job.links.map((l, i) => {
            const external = /^https?:/.test(l.path);
            return external
              ? <a key={i} href={l.path} target="_blank" rel="noreferrer">{l.label} ↗</a>
              : <span key={i} className="local-link" title={l.path}>{l.label} <code>{l.path}</code></span>;
          })}
        </div>
      )}

      <div className="detail-tabs">
        {docTabs.map(([k, label]) => <button key={k} type="button" className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{label}</button>)}
      </div>

      <div className="detail-body">
        {tab === 'fit' && (
          <>
            {job.fit?.verdict && <p className="verdict">{job.fit.verdict}</p>}
            <Scorecard fit={job.fit} />
            {job.fit?.strengths?.length > 0 && (
              <><h4>Strengths</h4><ul>{job.fit.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul></>
            )}
            {job.fit?.gaps?.length > 0 && (
              <><h4>Gaps</h4><ul>{job.fit.gaps.map((s, i) => <li key={i}>{s}</li>)}</ul></>
            )}
            {job.improvementPlan && <ImprovementPlan plan={job.improvementPlan} />}
          </>
        )}
        {tab === 'posting' && (job.docs?.posting ? <MiniMarkdown source={job.docs.posting} /> : <p className="muted">No posting.md</p>)}
        {tab === 'analysis' && (job.docs?.fitAnalysis ? <MiniMarkdown source={job.docs.fitAnalysis} /> : <p className="muted">No fit-analysis.md</p>)}
        {tab === 'notes' && (
          <>
            <div className="note-add">
              <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note (call, email, follow-up)…" rows={2} />
              <button type="button" onClick={addNote} disabled={busy || !note.trim()}>Add</button>
            </div>
            {job.docs?.notes ? <MiniMarkdown source={job.docs.notes} /> : <p className="muted">No notes yet.</p>}
          </>
        )}
        {tab === 'history' && (
          <ol className="history">
            {(job.history || []).slice().reverse().map((h, i) => (
              <li key={i}><span className="hist-date">{fmtDate(h.date)}</span> {h.event}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

function WorkflowPanel() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [open, setOpen] = useState({});

  useEffect(() => {
    axios.get('/api/workflow').then((r) => setData(r.data)).catch((e) => setErr(e.message));
  }, []);

  if (err) return <p className="api-warn">Couldn’t load workflow: {err}</p>;
  if (!data) return <p className="muted">Loading…</p>;

  return (
    <div className="workflow">
      <p className="muted small">Cross-project snapshot from <code>{data.configPath}</code></p>
      {data.sources.map((s) => {
        const key = s.name;
        const isOpen = open[key];
        return (
          <div className={`wf-source ${s.rootExists ? '' : 'missing'}`} key={key}>
            <div className="wf-head">
              <h3>{s.name}</h3>
              <div className="wf-stats">
                {s.openTasks && <span className={s.openTasks.openRowCount ? 'warn' : 'ok'}>{s.openTasks.openRowCount ?? '?'} open task{s.openTasks.openRowCount === 1 ? '' : 's'}</span>}
                {s.memory?.modified && <span>memory {s.memory.modified.slice(0, 10)}</span>}
                {!s.rootExists && <span className="warn">root missing</span>}
              </div>
              <button type="button" className="wf-toggle" onClick={() => setOpen((o) => ({ ...o, [key]: !o[key] }))}>
                {isOpen ? 'Hide' : 'Show'} details
              </button>
            </div>
            <code className="wf-root">{s.root}</code>
            {isOpen && (
              <div className="wf-detail">
                {s.changelog?.unreleased && (
                  <details open>
                    <summary>Unreleased changelog</summary>
                    <MiniMarkdown source={s.changelog.unreleased} />
                  </details>
                )}
                {s.openTasks?.content && (
                  <details>
                    <summary>Open tasks</summary>
                    <MiniMarkdown source={s.openTasks.content} />
                  </details>
                )}
                {s.memory?.content && (
                  <details>
                    <summary>Memory snapshot</summary>
                    <MiniMarkdown source={s.memory.content} />
                  </details>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Jobs() {
  const { company, role } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);
  const [err, setErr] = useState(null);
  const [view, setView] = useState('board');

  const selectedId = company && role ? `${company}/${role}` : null;

  const loadBoard = useCallback(() => {
    setErr(null);
    axios.get('/api/jobs/board')
      .then((r) => setBoard(r.data))
      .catch((e) => setErr(e.message));
  }, []);

  useEffect(() => { loadBoard(); }, [loadBoard]);

  const select = (id) => navigate(`/jobs/${id}`);

  return (
    <div className="jobs-page">
      <header className="jobs-header">
        <div>
          <h1>Application Tracker</h1>
          <p className="muted">Local tool · reads <code>Jobs/</code> via the dev API</p>
        </div>
        <div className="jobs-tabs">
          <button type="button" className={view === 'board' ? 'on' : ''} onClick={() => setView('board')}>Board</button>
          <button type="button" className={view === 'workflow' ? 'on' : ''} onClick={() => setView('workflow')}>Workflow</button>
          <a className="jobs-report-link" href={REPORT_URL} target="_blank" rel="noreferrer">Report&nbsp;↗</a>
        </div>
      </header>

      {err && (
        <div className="api-warn">
          API unavailable ({err}). Start it locally:
          <pre>cd server &amp;&amp; npm run dev</pre>
          then reload. This page only works against the local dev server.
        </div>
      )}

      {view === 'workflow' ? (
        <WorkflowPanel />
      ) : (
        <div className={`jobs-layout ${selectedId ? 'has-detail' : ''}`}>
          <div className="board">
            {board && board.columns.filter((c) => c.jobs.length).map((col) => (
              <section className="board-col" key={col.status}>
                <h2>{col.status} <span>{col.jobs.length}</span></h2>
                {col.jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    active={job.id === selectedId}
                    onClick={() => select(job.id)}
                  />
                ))}
              </section>
            ))}
            {board && board.total === 0 && <p className="muted">No jobs tracked yet.</p>}
          </div>

          {selectedId && (
            <aside className="detail-pane">
              <button type="button" className="detail-close" onClick={() => navigate('/jobs')}>← Board</button>
              <JobDetail id={selectedId} onChanged={loadBoard} />
            </aside>
          )}
        </div>
      )}
    </div>
  );
}
