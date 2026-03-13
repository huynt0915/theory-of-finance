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

// ── THEORY ───────────────────────────────────────────────────────────────
function switchTheory(key) {
  document.querySelectorAll('.theory-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.key === key));
  document.querySelectorAll('.theory-content').forEach(p =>
    p.classList.toggle('active', p.id === 'theory-' + key));
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
document.addEventListener('DOMContentLoaded', init);
