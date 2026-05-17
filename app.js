// ============================================================
// 珮珮记单词 - Application Logic
// SM-2 Spaced Repetition + Flashcard + Spelling + Synonym Match
// Dual Section: IELTS + CET-6
// ============================================================

const STORAGE_KEY = 'pp_vocab_progress';
const NOW = () => { const d = new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };

// ===== SM-2 Simplified Spaced Repetition =====
const SM2 = {
  defaultEase: 2.5,
  minEase: 1.3,

  schedule(card, quality) {
    if (!card) card = { interval: 0, ease: this.defaultEase, reps: 0, nextReview: NOW(), qualityHistory: [] };
    card.qualityHistory = card.qualityHistory || [];
    card.qualityHistory.push({ date: NOW(), quality: quality });

    if (quality === 0) {
      card.interval = 1;
      card.ease = Math.max(this.minEase, card.ease - 0.2);
    } else if (quality === 1) {
      card.interval = Math.max(1, Math.round(card.interval * 1.3));
      card.ease = Math.max(this.minEase, card.ease - 0.15);
    } else {
      if (card.interval === 0) card.interval = 1;
      else if (card.interval === 1) card.interval = 3;
      else card.interval = Math.round(card.interval * card.ease);
      card.ease += 0.1;
    }
    card.reps++;
    const next = new Date();
    next.setDate(next.getDate() + card.interval);
    card.nextReview = next.getFullYear()+'-'+String(next.getMonth()+1).padStart(2,'0')+'-'+String(next.getDate()).padStart(2,'0');
    card.lastReview = NOW();
    return card;
  },

  isDue(card) { return !card || !card.nextReview || card.nextReview <= NOW(); },
  isMastered(card) { return card && card.interval >= 60; }
};

// ===== App =====
class App {
  constructor() {
    this.darkMode = localStorage.getItem('pp_darkMode') === 'true';
    this.highFreqOnly = localStorage.getItem('pp_highFreqOnly') === 'true';
    this.currentView = 'dashboard';
    this.studyMode = 'flashcard';
    this.filterFreq = 'all';
    this.filterSubject = 'all';
    this.section = localStorage.getItem('pp_section') || 'ielts';
    this.progress = this.loadProgress();
    this.currentWord = null;
    this.spellWord = null;
    this.synState = { selectedLeft: null, matched: 0, total: 5, pairs: [] };
    this.init();
  }

  // ===== Persistence =====
  loadProgress() {
    try { const d = localStorage.getItem(STORAGE_KEY); return d ? JSON.parse(d) : { words: {}, dailyStats: {} }; }
    catch { return { words: {}, dailyStats: {} }; }
  }

  saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress)); }

  getCard(key) { return this.progress.words[key] || null; }

  updateCard(key, card) {
    this.progress.words[key] = card;
    this.recordActivity('reviewed');
    this.saveProgress();
  }

  recordActivity(type) {
    const day = NOW();
    if (!this.progress.dailyStats[day]) this.progress.dailyStats[day] = { newWords:0, reviewed:0, mastered:0, total:0 };
    const s = this.progress.dailyStats[day];
    if (type === 'new') s.newWords++;
    else if (type === 'reviewed') s.reviewed++;
    else if (type === 'mastered') s.mastered++;
    s.total = s.newWords + s.reviewed;
    this.saveProgress();
  }

  getStats() {
    const s = this.progress.dailyStats[NOW()] || { newWords:0, reviewed:0, mastered:0, total:0 };
    const mastered = Object.values(this.progress.words).filter(c => SM2.isMastered(c)).length;
    const due = this.getDueWords().length;
    const streak = this.calcStreak();
    const totalWords = WORD_DATA.ielts.length + WORD_DATA.cet6.length;
    return { ...s, mastered, due, streak, totalWords };
  }

  calcStreak() {
    let streak = 0;
    const d = new Date();
    for (let i = 0; i < 365; i++) {
      const day = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
      const entry = this.progress.dailyStats[day];
      if (entry && entry.total > 0) { streak++; d.setDate(d.getDate() - 1); }
      else if (i === 0) { d.setDate(d.getDate() - 1); continue; }
      else break;
    }
    return streak;
  }

  // ===== Word Access =====
  getAllWords() { return [...WORD_DATA.ielts, ...WORD_DATA.cet6]; }

  getSectionWords() { return WORD_DATA[this.section] || WORD_DATA.ielts; }

  getDueWords() {
    const due = [];
    for (const w of this.getAllWords()) {
      const card = this.getCard(w.w);
      if (card && SM2.isDue(card)) due.push({ word: w, card });
    }
    due.sort((a, b) => (a.card.nextReview||'').localeCompare(b.card.nextReview||''));
    return due;
  }

  // ===== Filtering =====
  filterWords() {
    let words = this.getSectionWords();

    if (this.highFreqOnly) words = words.filter(w => w.f === 'ultra' || w.f === 'high');
    if (this.filterFreq !== 'all') words = words.filter(w => w.f === this.filterFreq);
    if (this.filterSubject !== 'all') {
      const subj = this.filterSubject;
      words = words.filter(w => (w.s[subj]||0) >= 5);
      words.sort((a, b) => (b.s[subj]||0) - (a.s[subj]||0));
    }
    return words;
  }

  getRandomWord(filtered) {
    if (!filtered) filtered = this.filterWords();
    if (!filtered.length) return null;
    const dueKeys = new Set(this.getDueWords().map(d => d.word.w));
    const dueFiltered = filtered.filter(w => dueKeys.has(w.w));
    const src = dueFiltered.length > 0 ? dueFiltered : filtered;
    return src[Math.floor(Math.random() * src.length)];
  }

  // ===== Init =====
  init() {
    if (this.darkMode) document.body.classList.add('dark');
    document.getElementById('darkModeToggle').textContent = this.darkMode ? '☀️' : '🌙';
    document.getElementById('highFreqOnly').checked = this.highFreqOnly;
    this.bindNav();
    this.bindMobile();
    this.bindDarkMode();
    this.bindHighFreq();
    this.bindSectionTabs();
    this.bindStudyMode();
    this.bindFlashcard();
    this.bindSpelling();
    this.bindSynonym();
    this.bindWordList();
    this.bindFilters();
    this.renderAll();
    this.updateReviewBadge();
    setInterval(() => this.updateReviewBadge(), 60000);
  }

  renderAll() {
    this.renderDashboard();
    this.renderReviewList();
    if (this.currentView === 'study') this.startStudy();
    if (this.currentView === 'wordlist') this.renderWordList();
  }

  // ===== Navigation =====
  bindNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        this.navigateTo(link.dataset.view);
      });
    });
  }

  navigateTo(view) {
    this.currentView = view;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const target = document.querySelector(`[data-view="${view}"]`);
    if (target) target.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const viewEl = document.getElementById(`view-${view}`);
    if (viewEl) viewEl.classList.add('active');
    if (view === 'dashboard') this.renderDashboard();
    else if (view === 'study') this.startStudy();
    else if (view === 'review') this.renderReviewList();
    else if (view === 'wordlist') this.renderWordList();
  }

  // ===== Mobile sidebar toggle =====
  bindMobile() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('sidebarClose');
    const op = () => { sidebar.classList.add('open'); overlay.classList.add('active'); };
    const cl = () => { sidebar.classList.remove('open'); overlay.classList.remove('active'); };
    hamburger.addEventListener('click', op);
    overlay.addEventListener('click', cl);
    closeBtn.addEventListener('click', cl);
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => { if (window.innerWidth <= 768) cl(); });
    });
  }
  // ===== Dark Mode =====
  bindDarkMode() {
    document.getElementById('darkModeToggle').addEventListener('click', () => {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark', this.darkMode);
      document.getElementById('darkModeToggle').textContent = this.darkMode ? '☀️' : '🌙';
      localStorage.setItem('pp_darkMode', this.darkMode);
    });
  }

  // ===== High Freq Only =====
  bindHighFreq() {
    document.getElementById('highFreqOnly').addEventListener('change', e => {
      this.highFreqOnly = e.target.checked;
      localStorage.setItem('pp_highFreqOnly', this.highFreqOnly);
      this.renderAll();
    });
  }

  // ===== Section Tabs (IELTS / CET-6) =====
  bindSectionTabs() {
    document.querySelectorAll('.section-tab').forEach(tab => {
      if (tab.dataset.section === this.section) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
      tab.addEventListener('click', () => {
        this.section = tab.dataset.section;
        localStorage.setItem('pp_section', this.section);
        document.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.startStudy();
      });
    });
  }

  // ===== Filters =====
  bindFilters() {
    document.getElementById('filterFrequency').addEventListener('change', e => { this.filterFreq = e.target.value; this.startStudy(); });
    document.getElementById('filterSubject').addEventListener('change', e => { this.filterSubject = e.target.value; this.startStudy(); });
    document.getElementById('btnNewWord').addEventListener('click', () => this.startStudy());
  }

  // ===== Study Mode Switching =====
  bindStudyMode() {
    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.studyMode = tab.dataset.mode;
        document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.mode-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`mode-${this.studyMode}`).classList.add('active');
        this.startStudy();
      });
    });
  }

  startStudy() {
    if (this.studyMode === 'flashcard') this.startFlashcard();
    else if (this.studyMode === 'spelling') this.startSpelling();
    else if (this.studyMode === 'synonym') this.startSynonymGame();
  }

  // ==================== FLASHCARD (双向翻转) ====================
  bindFlashcard() {
    const card = document.getElementById('flashcard');
    // Toggle flip: click to flip BOTH ways
    card.addEventListener('click', () => {
      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        this.resetFlashcardHeight();
      } else {
        card.classList.add('flipped');
        this.showWordDetails();
        this.adjustFlashcardHeight();
      }
    });

    document.querySelectorAll('.fc-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        this.rateWord(parseInt(btn.dataset.quality));
      });
    });

    document.getElementById('btnSpeakFlashcard').addEventListener('click', e => {
      e.stopPropagation();
      if (this.currentWord) this.speakWord(this.currentWord.w);
    });
  }

  startFlashcard() {
    const filtered = this.filterWords();
    this.currentWord = this.getRandomWord(filtered);

    const card = document.getElementById('flashcard');
    card.classList.remove('flipped');

    if (!this.currentWord) {
      document.getElementById('fcWord').textContent = '🎉';
      document.getElementById('fcPhonetic').textContent = '已完成！换个板块或筛选试试';
      document.getElementById('fcFreq').textContent = '';
      document.getElementById('fcMeaning').textContent = '';
      document.getElementById('fcDetails').innerHTML = '';
      return;
    }

    document.getElementById('fcWord').textContent = this.currentWord.w;
    document.getElementById('fcPhonetic').textContent = this.currentWord.p;
    document.getElementById('fcFreq').textContent = this.freqLabel(this.currentWord.f) + ' · ' + this.sectionLabel();
    document.getElementById('fcMeaning').textContent = this.currentWord.m;
    document.getElementById('fcDetails').innerHTML = '';
  }

  showWordDetails() {
    if (!this.currentWord) return;
    const w = this.currentWord;
    const card = this.getCard(w.w);
    const status = !card ? '未学习' : SM2.isMastered(card) ? '已掌握' : `学习中 (复习${card.reps}次, 间隔${card.interval}天)`;
    const subjLabels = { L: '听力', R: '阅读', W: '写作', S: '口语' };
    const subjStr = Object.entries(w.s).map(([k, v]) => `${subjLabels[k]}:${v}次`).join(' · ');

    document.getElementById('fcDetails').innerHTML = `
      <div class="detail-block"><span class="detail-label">📝 真题例句一</span>
        <div class="detail-example">${w.e1 || ''}</div>
        <div class="detail-example-zh">${w.z1 || ''}</div>
        <div class="detail-example-year">📅 ${w.y1 || ''}</div>
      </div>
      <div class="detail-block"><span class="detail-label">📝 真题例句二</span>
        <div class="detail-example">${w.e2 || ''}</div>
        <div class="detail-example-zh">${w.z2 || ''}</div>
        <div class="detail-example-year">📅 ${w.y2 || ''}</div>
      </div>
      <div class="detail-block"><span class="detail-label">🔗 常用搭配</span><span class="detail-value">${(w.c||'').replace(/\|/g, ' · ')}</span></div>
      <div class="detail-block"><span class="detail-label">🔄 同义替换词</span><span class="detail-value">${(w.n||w.y||'').replace(/\|/g, ' · ')}</span></div>
      <div class="detail-block"><span class="detail-label">🧩 词根拆解</span><span class="detail-value">${w.r || ''}</span></div>
      <div class="detail-block"><span class="detail-label">📊 考试数据</span><span class="detail-value">${this.freqLabel(w.f)} · ${subjStr} · ${status}</span></div>
    `;
  }

  adjustFlashcardHeight() {
    const card = document.getElementById('flashcard');
    const back = card.querySelector('.flashcard-back');
    if (!back) return;
    const contentHeight = back.scrollHeight;
    const winH = window.innerHeight;
    // Cap at 80% of viewport height, min 420px
    card.style.height = Math.min(contentHeight + 40, Math.round(winH * 0.8)) + 'px';
    card.querySelectorAll('.flashcard-front, .flashcard-back').forEach(el => {
      el.style.height = card.style.height;
    });
  }

  resetFlashcardHeight() {
    const card = document.getElementById('flashcard');
    card.style.height = '';
    card.querySelectorAll('.flashcard-front, .flashcard-back').forEach(el => {
      el.style.height = '';
    });
  }

  rateWord(quality) {
    if (!this.currentWord) return;
    const key = this.currentWord.w;
    let card = this.getCard(key);
    const isNew = !card;
    card = SM2.schedule(card, quality);
    this.updateCard(key, card);
    if (isNew) this.recordActivity('new');
    if (SM2.isMastered(card) && !isNew) this.recordActivity('mastered');

    this.resetFlashcardHeight();
    document.getElementById('flashcard').classList.remove('flipped');
    setTimeout(() => {
      this.startFlashcard();
      this.updateReviewBadge();
    }, 350);
  }

  // ==================== SPELLING ====================
  bindSpelling() {
    document.getElementById('btnSpeakSpelling').addEventListener('click', () => { if (this.spellWord) this.speakWord(this.spellWord.w); });
    document.getElementById('btnSpellCheck').addEventListener('click', () => this.checkSpelling());
    document.getElementById('spellInput').addEventListener('keydown', e => { if (e.key === 'Enter') this.checkSpelling(); });
    document.getElementById('btnSpellHint').addEventListener('click', () => {
      if (!this.spellWord) return;
      const w = this.spellWord.w;
      document.getElementById('spellResult').textContent = '💡 提示: ' + w[0] + '_'.repeat(Math.max(0, w.length - 2)) + w[w.length - 1];
      document.getElementById('spellResult').className = 'spelling-result';
    });
    document.getElementById('btnSpellSkip').addEventListener('click', () => this.startSpelling());
  }

  startSpelling() {
    const filtered = this.filterWords();
    this.spellWord = this.getRandomWord(filtered);
    if (!this.spellWord) return;
    document.getElementById('spellMeaning').textContent = '释义: ' + this.spellWord.m;
    const input = document.getElementById('spellInput');
    input.value = '';
    input.className = 'spelling-input';
    input.focus();
    document.getElementById('spellResult').textContent = '';
    document.getElementById('spellResult').className = 'spelling-result';
    setTimeout(() => this.speakWord(this.spellWord.w), 300);
  }

  checkSpelling() {
    if (!this.spellWord) return;
    const input = document.getElementById('spellInput').value.trim().toLowerCase();
    const correct = this.spellWord.w.toLowerCase();
    const resultEl = document.getElementById('spellResult');
    const inputEl = document.getElementById('spellInput');

    if (input === correct) {
      inputEl.className = 'spelling-input correct';
      resultEl.textContent = '✅ 正确！ ' + this.spellWord.w + ' ' + this.spellWord.p;
      resultEl.className = 'spelling-result correct';
      const key = this.spellWord.w;
      let card = this.getCard(key);
      const isNew = !card;
      card = SM2.schedule(card, 2);
      this.updateCard(key, card);
      if (isNew) this.recordActivity('new');
      setTimeout(() => { this.startSpelling(); this.updateReviewBadge(); }, 1200);
    } else {
      inputEl.className = 'spelling-input wrong';
      resultEl.innerHTML = `❌ 错误！正确拼写: <strong>${this.spellWord.w}</strong> ${this.spellWord.p}`;
      resultEl.className = 'spelling-result wrong';
      const key = this.spellWord.w;
      let card = this.getCard(key);
      card = SM2.schedule(card || null, 0);
      this.updateCard(key, card);
      setTimeout(() => { this.startSpelling(); this.updateReviewBadge(); }, 2000);
    }
  }

  // ==================== SYNONYM MATCH ====================
  bindSynonym() {
    document.getElementById('btnSynReset').addEventListener('click', () => this.startSynonymGame());
  }

  startSynonymGame() {
    const filtered = this.filterWords();
    if (filtered.length < 5) {
      document.getElementById('synLeft').innerHTML = '<p style="color:var(--text-muted);padding:20px">需要更多单词</p>';
      document.getElementById('synRight').innerHTML = '';
      return;
    }
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);
    const pairs = selected.map(w => {
      const syns = (w.n || w.y || '').split('|');
      const syn = syns[Math.floor(Math.random() * syns.length)]?.trim() || '--';
      return { word: w.w, synonym: syn, wordObj: w };
    });
    this.synState = { selectedLeft: null, matched: 0, total: 5, pairs };
    document.getElementById('synScore').textContent = '0';
    document.getElementById('synTotal').textContent = '5';
    this.renderSynGame();
  }

  renderSynGame() {
    const { pairs } = this.synState;
    const lWords = [...pairs].sort(() => Math.random() - 0.5);
    const rSyns = [...pairs].sort(() => Math.random() - 0.5);
    document.getElementById('synLeft').innerHTML = lWords.map(p => `<div class="syn-item" data-word="${p.word}" data-pair="${p.word}">${p.word}</div>`).join('');
    document.getElementById('synRight').innerHTML = rSyns.map(p => `<div class="syn-item" data-syn="${p.synonym}" data-pair="${p.word}">${p.synonym}</div>`).join('');
    document.querySelectorAll('#synLeft .syn-item').forEach(el => el.addEventListener('click', () => this.synSelect(el, 'left')));
    document.querySelectorAll('#synRight .syn-item').forEach(el => el.addEventListener('click', () => this.synSelect(el, 'right')));
  }

  synSelect(el, side) {
    if (el.classList.contains('matched')) return;
    const prev = el.parentElement.querySelector('.selected');
    if (prev) prev.classList.remove('selected');
    el.classList.add('selected');

    const leftSel = side === 'left' ? el : this.synState.selectedLeft;
    const rightSel = side === 'right' ? el : document.getElementById('synRight').querySelector('.selected');

    if (leftSel && rightSel) {
      if (leftSel.dataset.pair === rightSel.dataset.pair) {
        leftSel.classList.add('matched'); leftSel.classList.remove('selected');
        rightSel.classList.add('matched'); rightSel.classList.remove('selected');
        this.synState.matched++;
        document.getElementById('synScore').textContent = this.synState.matched;
        this.synState.selectedLeft = null;
        const key = leftSel.dataset.pair;
        let card = this.getCard(key);
        card = SM2.schedule(card || null, 1);
        this.updateCard(key, card);
        if (this.synState.matched === this.synState.total) {
          setTimeout(() => { this.showToast('🎉 全部配对正确！'); this.startSynonymGame(); }, 800);
        }
      } else {
        leftSel.classList.add('wrong-flash'); rightSel.classList.add('wrong-flash');
        setTimeout(() => { leftSel.classList.remove('selected', 'wrong-flash'); rightSel.classList.remove('selected', 'wrong-flash'); }, 500);
        this.synState.selectedLeft = null;
      }
    } else if (side === 'left') {
      this.synState.selectedLeft = el;
    }
  }

  // ==================== DASHBOARD ====================
  renderDashboard() {
    const stats = this.getStats();
    document.getElementById('statToday').textContent = stats.total;
    document.getElementById('statMastered').textContent = stats.mastered;
    document.getElementById('statReview').textContent = stats.due;
    document.getElementById('statStreak').textContent = stats.streak;
    document.getElementById('statTotalWords').textContent = stats.totalWords;
    this.renderHeatmap();
    this.renderSubjectBars();
  }

  renderHeatmap() {
    const container = document.getElementById('heatmap');
    let html = '';
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const day = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
      const count = (this.progress.dailyStats[day] || {}).total || 0;
      let lv = 0;
      if (count >= 1) lv = 1;
      if (count >= 5) lv = 2;
      if (count >= 10) lv = 3;
      if (count >= 20) lv = 4;
      if (count >= 35) lv = 5;
      const dow = ['日','一','二','三','四','五','六'][d.getDay()];
      html += `<div class="heatmap-cell level-${lv}" title="${day} 周${dow}: ${count}词"></div>`;
    }
    container.innerHTML = html;
  }

  renderSubjectBars() {
    const total = Object.values(this.progress.words).filter(c => c.reps > 0).length;
    const subjects = [
      { key: 'L', name: '听力 Listening' },
      { key: 'R', name: '阅读 Reading' },
      { key: 'W', name: '写作 Writing' },
      { key: 'S', name: '口语 Speaking' },
    ];
    const allWords = this.getAllWords();
    let html = '';
    for (const s of subjects) {
      const cnt = allWords.filter(w => (this.getCard(w.w)||{}).reps > 0 && (w.s[s.key]||0) >= 3).length;
      const pct = total > 0 ? Math.round(cnt / Math.min(total, allWords.length) * 100) : 0;
      html += `<div class="subject-bar-item"><span class="subject-bar-label">${s.name}</span><div class="subject-bar-track"><div class="subject-bar-fill ${s.key}" style="width:${Math.max(pct,3)}%">${pct}%</div></div></div>`;
    }
    document.getElementById('subjectBars').innerHTML = html || '<p style="color:var(--text-muted)">开始学习后显示各科目进度</p>';
  }

  // ==================== REVIEW ====================
  renderReviewList() {
    const due = this.getDueWords();
    document.getElementById('reviewCount').textContent = due.length;
    const wl = new Date(); wl.setDate(wl.getDate() + 7);
    const ws = wl.getFullYear()+'-'+String(wl.getMonth()+1).padStart(2,'0')+'-'+String(wl.getDate()).padStart(2,'0');
    document.getElementById('reviewWeekCount').textContent = due.filter(d => d.card.nextReview <= ws).length;

    const list = document.getElementById('reviewList');
    if (!due.length) { list.innerHTML = '<p class="empty-hint">🎉 暂无需要复习的单词，去学习新词吧！</p>'; return; }

    list.innerHTML = due.slice(0, 40).map(({ word, card }) => `
      <div class="review-item" data-word="${word.w}" data-section="${word.t||'ielts'}">
        <div class="review-word-info">
          <span class="review-word">${word.w} <small class="review-section">[${word.t==='cet6'?'六级':'雅思'}]</small></span>
          <span class="review-meaning">${word.m}</span>
        </div>
        <span class="review-due">间隔${card.interval}天 · ${this.dueLabel(card.nextReview)}</span>
      </div>
    `).join('');

    list.querySelectorAll('.review-item').forEach(item => {
      item.addEventListener('click', () => {
        const wk = item.dataset.word; const ws = item.dataset.section;
        if (ws) { this.section = ws; localStorage.setItem('pp_section', this.section); }
        const w = this.getAllWords().find(x => x.w === wk);
        if (w) {
          this.currentWord = w;
          document.querySelectorAll('.section-tab').forEach(t => { t.classList.remove('active'); if (t.dataset.section === this.section) t.classList.add('active'); });
          document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
          document.querySelector('[data-mode="flashcard"]').classList.add('active');
          document.querySelectorAll('.mode-content').forEach(c => c.classList.remove('active'));
          document.getElementById('mode-flashcard').classList.add('active');
          this.studyMode = 'flashcard';
          this.navigateTo('study');
          setTimeout(() => this.startFlashcard(), 100);
        }
      });
    });
  }

  dueLabel(dateStr) {
    if (!dateStr) return '--';
    const due = new Date(dateStr+'T00:00:00');
    const now = new Date(); now.setHours(0,0,0,0);
    const diff = Math.round((due - now) / 86400000);
    if (diff <= 0) return '今天复习';
    if (diff === 1) return '明天';
    if (diff <= 7) return `${diff}天后`;
    return dateStr;
  }

  updateReviewBadge() {
    const count = this.getDueWords().length;
    const badge = document.getElementById('reviewBadge');
    if (!badge) return;
    if (count > 0) { badge.style.display = 'flex'; badge.textContent = count > 99 ? '99+' : count; }
    else badge.style.display = 'none';
  }

  // ==================== WORD LIST ====================
  bindWordList() {
    document.getElementById('wordSearch').addEventListener('input', () => this.renderWordList());
    document.getElementById('wlSection').addEventListener('change', () => this.renderWordList());
    document.getElementById('wlFilterFreq').addEventListener('change', () => this.renderWordList());
    document.getElementById('wlFilterStatus').addEventListener('change', () => this.renderWordList());
  }

  renderWordList() {
    const search = document.getElementById('wordSearch').value.toLowerCase();
    const secFilter = document.getElementById('wlSection').value;
    const freqFilter = document.getElementById('wlFilterFreq').value;
    const statusFilter = document.getElementById('wlFilterStatus').value;

    let words = this.getAllWords();
    if (secFilter !== 'all') words = words.filter(w => w.t === secFilter);
    if (search) words = words.filter(w => w.w.toLowerCase().includes(search) || w.m.includes(search));
    if (freqFilter !== 'all') words = words.filter(w => w.f === freqFilter);
    if (statusFilter !== 'all') {
      words = words.filter(w => {
        const card = this.getCard(w.w);
        if (statusFilter === 'new') return !card;
        if (statusFilter === 'learning') return card && !SM2.isMastered(card);
        if (statusFilter === 'mastered') return SM2.isMastered(card);
      });
    }

    const display = words.slice(0, 150);
    const tbody = document.getElementById('wordTableBody');
    tbody.innerHTML = display.map(w => {
      const card = this.getCard(w.w);
      let status = 'new', statusLabel = '未学';
      if (card && SM2.isMastered(card)) { status = 'mastered'; statusLabel = '已掌握'; }
      else if (card) { status = 'learning'; statusLabel = '学习中'; }
      const sectionLabel = w.t === 'cet6' ? '六级' : '雅思';
      const sectionClass = w.t === 'cet6' ? 'cet6' : 'ielts';
      return `<tr>
        <td class="word-cell" data-word="${w.w}">${w.w}</td>
        <td>${w.p}</td>
        <td>${w.m}</td>
        <td><span class="section-badge ${sectionClass}">${sectionLabel}</span></td>
        <td><span class="freq-badge ${w.f}">${this.freqLabel(w.f)}</span></td>
        <td><span class="status-badge ${status}">${statusLabel}</span></td>
      </tr>`;
    }).join('');

    if (words.length > 150) {
      tbody.innerHTML += `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:12px;">显示前150个（共${words.length}个匹配单词，请使用搜索缩小范围）</td></tr>`;
    }

    tbody.querySelectorAll('.word-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const wk = cell.dataset.word;
        const w = this.getAllWords().find(x => x.w === wk);
        if (w) this.showWordModal(w);
      });
    });
  }

  showWordModal(w) {
    const card = this.getCard(w.w);
    const status = !card ? '未学习' : SM2.isMastered(card) ? '已掌握' : `学习中 · 已复习${card.reps}次 · 间隔${card.interval}天`;
    const subjLabels = { L: '听力', R: '阅读', W: '写作', S: '口语' };
    const subjStr = Object.entries(w.s).map(([k, v]) => `${subjLabels[k]}:${v}次`).join(' · ');
    document.querySelector('.modal-overlay')?.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal">
        <button class="modal-close">&times;</button>
        <h2>${w.w} <small style="font-size:14px;color:var(--text-muted)">[${w.t==='cet6'?'六级词汇':'雅思词汇'}]</small></h2>
        <div class="phonetic">${w.p}</div>
        <div class="meaning">${w.m}</div>
        <div class="detail-section"><h4>📝 真题例句一 (${w.y1||'真题'})</h4><p>${w.e1||''}</p><p style="color:var(--text-secondary)">${w.z1||''}</p></div>
        <div class="detail-section"><h4>📝 真题例句二 (${w.y2||'真题'})</h4><p>${w.e2||''}</p><p style="color:var(--text-secondary)">${w.z2||''}</p></div>
        <div class="detail-section"><h4>🔗 常用搭配</h4><p>${(w.c||'').replace(/\|/g, ' · ')}</p></div>
        <div class="detail-section"><h4>🔄 同义替换词</h4><p>${(w.n||w.y||'').replace(/\|/g, ' · ')}</p></div>
        <div class="detail-section"><h4>🧩 词根拆解</h4><p>${w.r||''}</p></div>
        <div class="detail-section"><h4>📊 考试数据</h4><p>频率: ${this.freqLabel(w.f)} · ${subjStr} · 状态: ${status}</p></div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('.modal-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); } });
  }

  // ===== Utilities =====
  freqLabel(f) {
    const map = { ultra: '极高频', high: '高频', medium: '中频', low: '低频' };
    return map[f] || f;
  }

  sectionLabel() { return this.section === 'cet6' ? '六级词汇' : '雅思词汇'; }

  speakWord(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.8; u.pitch = 1;
    window.speechSynthesis.speak(u);
  }

  showToast(msg) {
    document.querySelector('.toast')?.remove();
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2500);
  }
}

// ===== Boot =====
document.addEventListener('DOMContentLoaded', () => { window.app = new App(); });
