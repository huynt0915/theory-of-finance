// app.js — Logic ứng dụng (quiz engine, navigation, UI)
// Không cần sửa file này khi thêm câu hỏi hoặc nội dung lý thuyết

let selectedTopics = new Set();
let quizQuestions = [];
let currentIdx = 0;
let answered = false;
let score = { correct: 0, wrong: 0 };
let wrongAnswers = [];
let userAnswers = [];

// ── INIT ─────────────────────────────────────────────────────────────────
function init() {
  buildTopicChips();
  buildTheoryTabs();
  buildQuestionList();
}

function buildTopicChips() {
  const container = document.getElementById('topic-chips');
  Object.entries(TOPICS).forEach(([key, label]) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.textContent = label;
    chip.onclick = () => toggleTopic(key, chip);
    container.appendChild(chip);
  });
}

function buildTheoryTabs() {
  const nav = document.getElementById('theory-nav');
  const panels = document.getElementById('theory-panels');
  let first = true;
  Object.entries(THEORY_DATA).forEach(([key, data]) => {
    const tab = document.createElement('div');
    tab.className = 'theory-tab' + (first ? ' active' : '');
    tab.textContent = data.title;
    tab.dataset.key = key;
    tab.onclick = () => switchTheory(key);
    nav.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'theory-content card' + (first ? ' active' : '');
    panel.id = 'theory-' + key;
    panel.innerHTML = `<h2>${data.title}</h2>${data.content}`;
    panels.appendChild(panel);
    first = false;
  });
}

// ── TOPIC SELECTION ───────────────────────────────────────────────────────
function toggleTopic(key, chip) {
  if (selectedTopics.has(key)) {
    selectedTopics.delete(key);
    chip.classList.remove('selected');
  } else {
    selectedTopics.add(key);
    chip.classList.add('selected');
  }
  updateCount();
}

function selectAll() {
  document.querySelectorAll('#topic-chips .chip').forEach((chip, i) => {
    const key = Object.keys(TOPICS)[i];
    selectedTopics.add(key);
    chip.classList.add('selected');
  });
  updateCount();
}

function updateCount() {
  const filtered = QUESTIONS.filter(q => selectedTopics.has(q.chapter));
  const cnt = parseInt(document.getElementById('q-count').value) || 0;
  const total = cnt === 0 ? filtered.length : Math.min(cnt, filtered.length);
  document.getElementById('selected-count').textContent = total;
  document.getElementById('start-btn').disabled = selectedTopics.size === 0;
}

// ── QUIZ FLOW ─────────────────────────────────────────────────────────────
function startQuiz() {
  const filtered = QUESTIONS.filter(q => selectedTopics.has(q.chapter));
  const cnt = parseInt(document.getElementById('q-count').value) || 0;
  const doShuffle = document.getElementById('shuffle-opt').checked;

  let pool = doShuffle ? shuffle([...filtered]) : [...filtered];
  if (cnt > 0) pool = pool.slice(0, cnt);

  quizQuestions = pool;
  currentIdx = 0;
  score = { correct: 0, wrong: 0 };
  wrongAnswers = [];
  userAnswers = new Array(pool.length).fill(null);

  show('quiz-play');
  hide('quiz-setup');
  hide('quiz-result');
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentIdx];
  const total = quizQuestions.length;

  document.getElementById('progress-fill').style.width = (currentIdx / total * 100) + '%';
  document.getElementById('q-num').textContent = `Câu ${currentIdx + 1}/${total}`;
  document.getElementById('q-chapter').textContent = TOPICS[q.chapter] || q.chapter;
  document.getElementById('q-text').textContent = q.text;

  const explEl = document.getElementById('q-explanation');
  explEl.className = 'explanation';
  explEl.innerHTML = '<strong>💡 Giải thích:</strong> ' + q.explanation;

  document.getElementById('btn-explain').style.display = 'none';
  document.getElementById('btn-next').style.display = 'none';
  answered = false;

  const doShuffleAns = document.getElementById('shuffle-ans').checked;
  const optsEl = document.getElementById('q-options');
  optsEl.innerHTML = '';

  const indices = doShuffleAns ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3];
  indices.forEach((dataIdx, displayPos) => {
    const opt = document.createElement('div');
    opt.className = 'option';
    opt.dataset.idx = dataIdx;
    const label = ['A', 'B', 'C', 'D'][displayPos];
    opt.innerHTML = `<span class="opt-label">${label}.</span>${q.options[dataIdx]}`;
    opt.onclick = () => selectAnswer(dataIdx, opt, q);
    optsEl.appendChild(opt);
  });
}

function selectAnswer(idx, el, q) {
  if (answered) return;
  answered = true;

  const isCorrect = idx === q.answer;
  document.querySelectorAll('.option').forEach(o => {
    o.classList.add('disabled');
    if (parseInt(o.dataset.idx) === q.answer) o.classList.add('correct');
    else if (parseInt(o.dataset.idx) === idx && !isCorrect) o.classList.add('wrong');
  });

  if (isCorrect) score.correct++;
  else {
    score.wrong++;
    wrongAnswers.push({ q, userIdx: idx });
  }
  userAnswers[currentIdx] = idx;

  document.getElementById('btn-explain').style.display = 'inline-flex';
  document.getElementById('btn-next').style.display = 'inline-flex';
  document.getElementById('btn-next').textContent =
    currentIdx < quizQuestions.length - 1 ? 'Câu tiếp →' : '📊 Xem kết quả';
}

function showExplanation() {
  document.getElementById('q-explanation').classList.add('show');
  document.getElementById('btn-explain').style.display = 'none';
}

function nextQuestion() {
  if (currentIdx < quizQuestions.length - 1) {
    currentIdx++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  hide('quiz-play');
  show('quiz-result');

  const total = quizQuestions.length;
  const pct = Math.round(score.correct / total * 100);
  document.getElementById('res-score').textContent = pct + '%';

  const labels = { 90: '🏆 Xuất sắc!', 75: '🎉 Tốt!', 60: '💪 Khá!', 0: '📚 Cần ôn thêm' };
  const label = Object.entries(labels).reverse().find(([k]) => pct >= k)[1];
  document.getElementById('res-label').textContent = `${score.correct}/${total} câu đúng — ${label}`;
  document.getElementById('res-correct').textContent = score.correct;
  document.getElementById('res-wrong').textContent = score.wrong;
  document.getElementById('res-skip').textContent = total - score.correct - score.wrong;

  const wl = document.getElementById('wrong-list');
  wl.innerHTML = wrongAnswers.length
    ? '<h3 style="margin-bottom:12px">❌ Câu làm sai — Xem lại</h3>'
    : '<p style="text-align:center;color:var(--success);font-size:1.1rem;padding:24px">🎉 Hoàn hảo! Không có câu sai.</p>';

  wrongAnswers.forEach(({ q, userIdx }) => {
    wl.innerHTML += `<div class="wrong-item">
      <div class="wi-q">${q.text}</div>
      <div class="wi-correct">✅ Đáp án đúng: ${q.options[q.answer]}</div>
      <div class="wi-yours">❌ Bạn chọn: ${q.options[userIdx]}</div>
      <div style="margin-top:8px;font-size:.82rem;color:#6b7280"><b>Giải thích:</b> ${q.explanation}</div>
    </div>`;
  });
}

function restartQuiz() {
  hide('quiz-result');
  startQuiz();
}

// ── QUESTIONS LIST ───────────────────────────────────────────────────────
let qlistActiveFilter = 'ALL';

function buildQuestionList() {
  // Filter chips
  const filtersEl = document.getElementById('qlist-filters');
  const allChip = document.createElement('div');
  allChip.className = 'qlist-chip active';
  allChip.textContent = 'Tất cả';
  allChip.dataset.key = 'ALL';
  allChip.onclick = () => setQlistFilter('ALL', allChip);
  filtersEl.appendChild(allChip);

  Object.entries(TOPICS).forEach(([key, label]) => {
    const chip = document.createElement('div');
    chip.className = 'qlist-chip';
    chip.textContent = label.split(' — ')[0]; // e.g. "C2"
    chip.dataset.key = key;
    chip.onclick = () => setQlistFilter(key, chip);
    filtersEl.appendChild(chip);
  });

  renderQuestionList();
}

function setQlistFilter(key, chipEl) {
  qlistActiveFilter = key;
  document.querySelectorAll('.qlist-chip').forEach(c => c.classList.remove('active'));
  chipEl.classList.add('active');
  document.getElementById('qlist-search').value = '';
  renderQuestionList();
}

function filterQuestions() {
  renderQuestionList();
}

function renderQuestionList() {
  const search = document.getElementById('qlist-search').value.toLowerCase().trim();
  const body = document.getElementById('qlist-body');
  body.innerHTML = '';

  const filtered = QUESTIONS.filter(q => {
    const matchChapter = qlistActiveFilter === 'ALL' || q.chapter === qlistActiveFilter;
    const matchSearch = !search
      || q.text.toLowerCase().includes(search)
      || q.options.some(o => o.toLowerCase().includes(search))
      || q.explanation.toLowerCase().includes(search);
    return matchChapter && matchSearch;
  });

  document.getElementById('qlist-count').textContent = `${filtered.length} câu`;

  if (filtered.length === 0) {
    body.innerHTML = '<div class="card" style="text-align:center;color:var(--muted);padding:32px">Không tìm thấy câu nào phù hợp.</div>';
    return;
  }

  // Group by chapter
  const grouped = {};
  filtered.forEach(q => {
    if (!grouped[q.chapter]) grouped[q.chapter] = [];
    grouped[q.chapter].push(q);
  });

  Object.entries(grouped).forEach(([chapter, qs]) => {
    const section = document.createElement('div');
    section.className = 'qlist-chapter';
    section.innerHTML = `
      <div class="qlist-chapter-header">
        <span>${TOPICS[chapter] || chapter}</span>
        <span class="ch-count">${qs.length} câu</span>
      </div>`;

    qs.forEach((q, idx) => {
      const item = document.createElement('div');
      item.className = 'qlist-item';
      const labels = ['A', 'B', 'C', 'D'];
      const optionsHtml = q.options.map((opt, i) =>
        `<div class="qlist-option${i === q.answer ? ' is-answer' : ''}">
          <b>${labels[i]}.</b> ${opt}${i === q.answer ? ' ✅' : ''}
        </div>`
      ).join('');

      item.innerHTML = `
        <div class="qlist-item-header" onclick="toggleQItem(this)">
          <span class="qlist-item-num">Q${q.id}</span>
          <span class="qlist-item-text">${q.text}</span>
          <span class="qlist-item-toggle">▼ Xem</span>
        </div>
        <div class="qlist-item-body">
          ${optionsHtml}
          <div class="qlist-explanation"><b>💡 Giải thích:</b> ${q.explanation}</div>
        </div>`;
      section.appendChild(item);
    });

    body.appendChild(section);
  });

  // Re-render KaTeX for new content
  if (window.renderMathInElement) {
    renderMathInElement(body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$',  right: '$',  display: false },
      ],
      throwOnError: false,
    });
  }
}

function toggleQItem(headerEl) {
  const body = headerEl.nextElementSibling;
  const toggle = headerEl.querySelector('.qlist-item-toggle');
  const isOpen = body.classList.toggle('open');
  toggle.textContent = isOpen ? '▲ Ẩn' : '▼ Xem';
}

// ── THEORY ───────────────────────────────────────────────────────────────
function switchTheory(key) {
  document.querySelectorAll('.theory-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.key === key));
  document.querySelectorAll('.theory-content').forEach(p =>
    p.classList.toggle('active', p.id === 'theory-' + key));
}

// ── EXPORT PDF ───────────────────────────────────────────────────────────
function exportPDF(pageId) {
  const titles = {
    theory:    'Lý thuyết Tài chính — UEH Master',
    questions: 'Danh sách câu hỏi — Lý thuyết Tài chính',
  };

  let bodyHtml = '';

  if (pageId === 'theory') {
    // Collect all rendered theory panels (KaTeX already rendered in DOM)
    const panels = document.querySelectorAll('.theory-content');
    panels.forEach(p => { bodyHtml += p.outerHTML; });

  } else if (pageId === 'questions') {
    // Build questions HTML with all answers expanded
    const chapters = document.querySelectorAll('#qlist-body .qlist-chapter');
    chapters.forEach(ch => {
      const header = ch.querySelector('.qlist-chapter-header').outerHTML;
      let items = '';
      ch.querySelectorAll('.qlist-item').forEach(item => {
        const qHeader = item.querySelector('.qlist-item-header').cloneNode(true);
        qHeader.querySelector('.qlist-item-toggle')?.remove();
        const qBody = item.querySelector('.qlist-item-body').cloneNode(true);
        qBody.style.display = 'block';
        items += `<div class="qlist-item" style="border:1px solid #e5e7eb;margin-bottom:8px;border-radius:0">
          ${qHeader.outerHTML}${qBody.outerHTML}
        </div>`;
      });
      bodyHtml += `<div style="margin-bottom:24px">${header}${items}</div>`;
    });
  }

  // Inline KaTeX CSS + minimal layout CSS
  const katexCss = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
  const printDoc = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${titles[pageId]}</title>
  <link rel="stylesheet" href="${katexCss}">
  <style>
    body { font-family: 'Segoe UI', system-ui, sans-serif; max-width: 860px; margin: 0 auto; padding: 24px 16px; color: #111827; font-size: 14px; }
    h2 { font-size: 1.1rem; font-weight: 700; color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 6px; margin: 24px 0 10px; }
    h3 { font-size: .95rem; font-weight: 700; color: #1e40af; border-left: 3px solid #1e40af; padding-left: 8px; margin: 16px 0 8px; }
    table { border-collapse: collapse; width: 100%; margin: 8px 0 14px; font-size: .88rem; }
    th { background: #eff6ff; color: #1e40af; font-weight: 600; }
    th, td { border: 1px solid #d1d5db; padding: 7px 10px; line-height: 1.5; }
    tr:nth-child(even) td { background: #f9fafb; }
    p { margin: 6px 0 10px; line-height: 1.7; }
    .theory-content { margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid #e5e7eb; }
    /* tags */
    .tag { display:inline-block; padding:2px 8px; border-radius:4px; font-size:.82rem; font-weight:600; }
    .tag-up   { background:#dcfce7; color:#15803d; }
    .tag-down { background:#fee2e2; color:#b91c1c; }
    .tag-same { background:#f3f4f6; color:#374151; }
    /* reserve diagram */
    .reserve-diagram { background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:14px 18px; margin:10px 0; font-size:.85rem; }
    .rd-ceiling { color:#dc2626; border-top:1px dashed #dc2626; padding:4px 0; }
    .rd-mid     { color:#16a34a; padding:6px 0; }
    .rd-floor   { color:#2563eb; border-bottom:1px dashed #2563eb; padding:4px 0; }
    .rd-body    { border-left:2px solid #94a3b8; padding-left:12px; margin:4px 0 4px 8px; }
    .rd-axis-y,.rd-axis-x { font-size:.78rem; color:#64748b; }
    .rd-note    { font-size:.78rem; color:#64748b; margin-top:8px; }
    /* trinity */
    .trinity-diagram { border:1px solid #e5e7eb; border-radius:8px; padding:16px; margin:10px 0; text-align:center; }
    .trinity-node { background:#1e40af; color:white; border-radius:6px; padding:7px 14px; font-size:.85rem; font-weight:600; display:inline-block; margin:4px; }
    .trinity-row  { display:flex; align-items:center; justify-content:center; gap:12px; margin:8px 0; }
    .trinity-center { background:#fef3c7; color:#92400e; border:2px solid #f59e0b; border-radius:50%; width:60px; height:60px; display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:.78rem; }
    .trinity-examples { display:flex; flex-direction:column; gap:4px; text-align:left; margin-top:8px; }
    .trinity-eg { font-size:.8rem; color:#374151; padding:4px 8px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:4px; }
    /* questions */
    .qlist-chapter-header { background:#1e40af; color:white; padding:8px 14px; font-size:.95rem; font-weight:700; display:flex; justify-content:space-between; border-radius:6px 6px 0 0; }
    .qlist-item-header { display:flex; gap:10px; padding:10px 14px; align-items:flex-start; }
    .qlist-item-num { background:#dbeafe; color:#1e40af; border-radius:4px; padding:2px 6px; font-size:.75rem; font-weight:700; white-space:nowrap; }
    .qlist-item-text { font-size:.9rem; font-weight:600; line-height:1.5; flex:1; }
    .qlist-item-body { padding:0 14px 12px; border-top:1px solid #f3f4f6; }
    .qlist-option { padding:6px 10px; border:1px solid #e5e7eb; border-radius:5px; font-size:.85rem; margin-top:5px; }
    .qlist-option.is-answer { background:#f0fdf4; border-color:#15803d; color:#065f46; font-weight:600; }
    .qlist-explanation { margin-top:8px; padding:8px 12px; background:#fefce8; border:1px solid #fde68a; border-radius:6px; font-size:.82rem; color:#78350f; line-height:1.6; }
    /* print */
    @media print {
      body { padding: 0; }
      .theory-content { page-break-inside: avoid; }
      .qlist-item { page-break-inside: avoid; }
      h2, h3 { page-break-after: avoid; }
    }
    .print-hint { background:#eff6ff; border:1px solid #93c5fd; border-radius:8px; padding:12px 16px; margin-bottom:20px; font-size:.85rem; color:#1e40af; }
  </style>
</head>
<body>
  <div class="print-hint">
    💡 <b>Lưu PDF:</b> Dùng menu trình duyệt → <b>In / Print</b> → chọn <b>Lưu dưới dạng PDF</b> &nbsp;|&nbsp;
    iOS Safari: nút <b>Chia sẻ ↑</b> → <b>In</b> → kéo phóng to → lưu.
  </div>
  ${bodyHtml}
  <script>
    // Auto-trigger print after a short delay (desktop only)
    if (!/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
      setTimeout(() => window.print(), 600);
    }
  </script>
</body>
</html>`;

  const blob = new Blob([printDoc], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

// ── NAVIGATION ───────────────────────────────────────────────────────────
function showPage(name, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  if (el) el.classList.add('active');
}

// ── HELPERS ──────────────────────────────────────────────────────────────
function show(id) { document.getElementById(id).style.display = 'block'; }
function hide(id) { document.getElementById(id).style.display = 'none'; }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── BOOTSTRAP ────────────────────────────────────────────────────────────
document.getElementById('q-count').addEventListener('change', updateCount);
document.addEventListener('DOMContentLoaded', () => {
  init();
  // KaTeX re-render after dynamic panels injected (auto-render may have fired before init())
  setTimeout(() => {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$',  right: '$',  display: false },
        ],
        throwOnError: false,
      });
    }
  }, 100);
});
