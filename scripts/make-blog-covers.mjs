// Generates branded 1200x675 cover images for the newer blog posts (src/data/posts/*) using sharp.
// Run from the project root: node scripts/make-blog-covers.mjs  (writes to public/assets/blog/<slug>.jpg)
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const require = createRequire(path.join(process.cwd(), 'package.json'));
const sharp = require('sharp');

const { decisionPosts } = await import(path.join(process.cwd(), 'src/data/posts/decision.js').replace(/\\/g, '/').replace(/^([A-Za-z]):/, 'file:///$1:'));
const { considerationPosts } = await import(path.join(process.cwd(), 'src/data/posts/consideration.js').replace(/\\/g, '/').replace(/^([A-Za-z]):/, 'file:///$1:'));
const { awarenessPostsA } = await import(path.join(process.cwd(), 'src/data/posts/awareness-a.js').replace(/\\/g, '/').replace(/^([A-Za-z]):/, 'file:///$1:'));
const { awarenessPostsB } = await import(path.join(process.cwd(), 'src/data/posts/awareness-b.js').replace(/\\/g, '/').replace(/^([A-Za-z]):/, 'file:///$1:'));

const posts = [...decisionPosts, ...considerationPosts, ...awarenessPostsA, ...awarenessPostsB];

const W = 1200, H = 675;
const GREEN = '#1C421D', ACCENT = '#BAD43B', WARM = '#FBFBFA', CHARCOAL = '#1F2A1F', SAGE = '#E9F0E4';

const THEMES = {
  decision: { bg: GREEN, text: '#FFFFFF', sub: 'rgba(255,255,255,0.72)', motif: ACCENT, badgeBg: ACCENT, badgeText: GREEN, logo: 'light' },
  consideration: { bg: SAGE, text: GREEN, sub: 'rgba(28,66,29,0.7)', motif: GREEN, badgeBg: GREEN, badgeText: '#FFFFFF', logo: 'dark' },
  awareness: { bg: WARM, text: GREEN, sub: 'rgba(31,42,31,0.65)', motif: ACCENT, badgeBg: GREEN, badgeText: '#FFFFFF', logo: 'dark' }
};

const STAGE_LABEL = { awareness: 'LEARN', consideration: 'COMPARE', decision: 'DECIDE' };

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// Shorten overly long titles at a natural break so covers stay readable.
function coverTitle(t) {
  let s = t.replace(/\s*\(.*?\)\s*$/, '');
  if (s.length > 78) s = s.split(':')[0];
  return s;
}

function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) { lines.push(cur); cur = w; }
    else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

// Six subtle background motifs, chosen by post index.
function motif(i, color) {
  const o = 0.18;
  switch (i % 6) {
    case 0: { // dot grid, right side
      let d = '';
      for (let x = 760; x < W; x += 34) for (let y = 40; y < H; y += 34) d += `<circle cx="${x}" cy="${y}" r="2.2" fill="${color}" opacity="${o}"/>`;
      return d;
    }
    case 1: { // concentric arcs bottom right
      let d = '';
      for (let r = 120; r <= 640; r += 52) d += `<circle cx="${W + 40}" cy="${H + 60}" r="${r}" fill="none" stroke="${color}" stroke-width="2" opacity="${o}"/>`;
      return d;
    }
    case 2: { // diagonal lines
      let d = '';
      for (let x = 700; x < W + H; x += 36) d += `<line x1="${x}" y1="0" x2="${x - H}" y2="${H}" stroke="${color}" stroke-width="2" opacity="${o * 0.8}"/>`;
      return d;
    }
    case 3: { // chevrons
      let d = '';
      for (let y = -40; y < H + 80; y += 60) d += `<polyline points="820,${y} 960,${y + 70} 1100,${y} 1240,${y + 70}" fill="none" stroke="${color}" stroke-width="2.5" opacity="${o * 0.9}"/>`;
      return d;
    }
    case 4: { // big soft circles
      return `<circle cx="1060" cy="140" r="260" fill="${color}" opacity="${o * 0.6}"/><circle cx="1180" cy="560" r="190" fill="${color}" opacity="${o * 0.8}"/>`;
    }
    default: { // square grid
      let d = '';
      for (let x = 780; x < W; x += 48) for (let y = 20; y < H; y += 48) d += `<rect x="${x}" y="${y}" width="22" height="22" rx="3" fill="none" stroke="${color}" stroke-width="1.5" opacity="${o * 0.9}"/>`;
      return d;
    }
  }
}

async function logoBuffer(variant) {
  const src = path.join(process.cwd(), 'public/assets/logo.png');
  const resized = sharp(src).resize({ height: 36 });
  if (variant === 'dark') return resized.png().toBuffer();
  // Recolour the wordmark white by pushing a solid fill through its alpha channel.
  const { width, height } = await resized.clone().metadata();
  const alpha = await resized.clone().ensureAlpha().extractChannel('alpha').toBuffer();
  return sharp({ create: { width, height, channels: 3, background: '#FFFFFF' } }).joinChannel(alpha).png().toBuffer();
}

const outDir = path.join(process.cwd(), 'public/assets/blog');
mkdirSync(outDir, { recursive: true });

const logos = { light: await logoBuffer('light'), dark: await logoBuffer('dark') };

for (let i = 0; i < posts.length; i++) {
  const p = posts[i];
  const t = THEMES[p.funnelStage] || THEMES.awareness;
  const title = coverTitle(p.title);
  const fontSize = title.length > 60 ? 50 : 58;
  const maxChars = Math.floor(720 / (fontSize * 0.5));
  const lines = wrap(title, maxChars).slice(0, 4);
  const lineH = fontSize * 1.16;
  const blockH = lines.length * lineH;
  const titleTop = 100 + (300 - blockH) / 2;

  const titleSvg = lines.map((l, k) => `<text x="80" y="${Math.round(titleTop + fontSize + k * lineH)}" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="${fontSize}" fill="${t.text}">${esc(l)}</text>`).join('');
  const badgeText = p.category.toUpperCase();
  const badgeW = badgeText.length * 11 + 44;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="${t.bg}"/>
    ${motif(i, t.motif)}
    ${titleSvg}
    <line x1="80" y1="436" x2="1120" y2="436" stroke="${t.sub}" stroke-width="1" opacity="0.5"/>
    <text x="1120" y="476" text-anchor="end" font-family="'Segoe UI', Arial, sans-serif" font-weight="600" font-size="17" letter-spacing="1.5" fill="${t.sub}">SCALEEZY INSIGHTS  ·  scaleezy.com/blogs</text>
  </svg>`;

  const out = path.join(outDir, `${p.slug}.jpg`);
  await sharp(Buffer.from(svg))
    .composite([{ input: logos[t.logo], left: 80, top: 452 }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(out);
  console.log(`${p.id}\t${p.funnelStage}\t${path.basename(out)}`);
}
