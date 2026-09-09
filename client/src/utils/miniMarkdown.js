import React from 'react';

/**
 * Minimal Markdown → React renderer for the job-tracker docs (posting.md,
 * fit-analysis.md, notes.md). Handles the subset those files use: ATX headings,
 * bold, italic, inline code, links, blockquotes, horizontal rules, unordered
 * lists, and pipe tables. Not a general-purpose renderer — deliberately tiny
 * and dependency-free.
 */

function renderInline(text, keyPrefix) {
  // Split on **bold**, *italic*, `code`, and [label](url), keeping the delimiters.
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.filter(Boolean).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={key}>{part.slice(2, -2)}</strong>;
    if (/^\*[^*\n]+\*$/.test(part)) return <em key={key}>{part.slice(1, -1)}</em>;
    if (/^`[^`]+`$/.test(part)) return <code key={key}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = /^https?:/.test(link[2]);
      return (
        <a key={key} href={link[2]} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
          {link[1]}
        </a>
      );
    }
    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

function splitRow(line) {
  return line.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
}

export default function MiniMarkdown({ source }) {
  if (!source) return null;
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  let b = 0; // stable per-block key, never mutated inside a closure

  while (i < lines.length) {
    const line = lines[i];
    const k = `b${b}`;
    b += 1;

    if (!line.trim()) { i += 1; continue; }

    if (/^---+$/.test(line.trim())) { blocks.push(<hr key={k} />); i += 1; continue; }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const Tag = `h${Math.min(h[1].length + 1, 6)}`;
      blocks.push(<Tag key={k}>{renderInline(h[2], k)}</Tag>);
      i += 1;
      continue;
    }

    // Table: header row, separator row, then body rows.
    if (
      line.includes('|') &&
      i + 1 < lines.length &&
      /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) &&
      lines[i + 1].includes('-')
    ) {
      const header = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        rows.push(splitRow(lines[i]));
        i += 1;
      }
      blocks.push(
        <div className="md-table-wrap" key={k}>
          <table>
            <thead>
              <tr>{header.map((c, x) => <th key={x}>{renderInline(c, `${k}h${x}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r, y) => (
                <tr key={y}>{r.map((c, x) => <td key={x}>{renderInline(c, `${k}r${y}c${x}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { quote.push(lines[i].replace(/^>\s?/, '')); i += 1; }
      blocks.push(<blockquote key={k}>{renderInline(quote.join(' '), k)}</blockquote>);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ''));
        i += 1;
      }
      blocks.push(<ul key={k}>{items.map((it, x) => <li key={x}>{renderInline(it, `${k}i${x}`)}</li>)}</ul>);
      continue;
    }

    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|>\s?|\s*[-*]\s|---+$)/.test(lines[i])) {
      para.push(lines[i]);
      i += 1;
    }
    blocks.push(<p key={k}>{renderInline(para.join(' '), k)}</p>);
  }

  return <div className="md">{blocks}</div>;
}
