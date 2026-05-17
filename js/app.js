// ============================================================
// Our NYC Saturdays - Application
// A curated Saturday planner for Sherif and Sarah
// ============================================================

// --------------------------------------------------
// SVG Icons
// --------------------------------------------------
const ICONS = {
  heartOutline: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 15.5C9 15.5 2 11 2 6.5C2 4.5 3.5 3 5.5 3C7 3 8.3 3.8 9 5C9.7 3.8 11 3 12.5 3C14.5 3 16 4.5 16 6.5C16 11 9 15.5 9 15.5Z"/>
  </svg>`,

  heartFilled: `<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 15.5C9 15.5 2 11 2 6.5C2 4.5 3.5 3 5.5 3C7 3 8.3 3.8 9 5C9.7 3.8 11 3 12.5 3C14.5 3 16 4.5 16 6.5C16 11 9 15.5 9 15.5Z"/>
  </svg>`,

  chevronDown: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4,6 8,10 12,6"/>
  </svg>`,

  mapPin: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 1C4.5 1 2.5 3 2.5 5.5C2.5 9 7 13 7 13C7 13 11.5 9 11.5 5.5C11.5 3 9.5 1 7 1Z"/>
    <circle cx="7" cy="5.5" r="1.5"/>
  </svg>`,

  externalLink: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 3L5 7"/>
    <path d="M6.5 3H9V5.5"/>
    <path d="M9 7.5V9.5C9 10 8.5 10.5 8 10.5H2.5C2 10.5 1.5 10 1.5 9.5V4C1.5 3.5 2 3 2.5 3H4.5"/>
  </svg>`,

  calendar: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="1" y="2.5" width="12" height="10.5" rx="1.5"/>
    <line x1="1" y1="6" x2="13" y2="6"/>
    <line x1="4.5" y1="1" x2="4.5" y2="4"/>
    <line x1="9.5" y1="1" x2="9.5" y2="4"/>
  </svg>`,

  search: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="6.5" cy="6.5" r="4.5"/>
    <line x1="10" y1="10" x2="14" y2="14"/>
  </svg>`,

  close: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <line x1="4" y1="4" x2="12" y2="12"/>
    <line x1="12" y1="4" x2="4" y2="12"/>
  </svg>`,

  check: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3,7 6,10 11,4"/>
  </svg>`,

  note: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 1H3C2.4 1 2 1.4 2 2V12C2 12.6 2.4 13 3 13H11C11.6 13 12 12.6 12 12V5L8 1Z"/>
    <polyline points="8,1 8,5 12,5"/>
    <line x1="4.5" y1="8" x2="9.5" y2="8"/>
    <line x1="4.5" y1="10.5" x2="7.5" y2="10.5"/>
  </svg>`,

  dollar: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="1" x2="6" y2="11"/>
    <path d="M9 3.5C9 3.5 8 2.5 6 2.5C4 2.5 3 3.5 3 4.5C3 6 5 6 6 6.5C7 7 9 7 9 8.5C9 9.5 8 10.5 6 10.5C4 10.5 3 9.5 3 9.5"/>
  </svg>`,

  surprise: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 1L9.5 5.5L14 6L10.5 9L11.5 14L8 11.5L4.5 14L5.5 9L2 6L6.5 5.5L8 1Z"/>
  </svg>`
};


// --------------------------------------------------
// Utilities
// --------------------------------------------------

function parseDate(dateStr) {
  // dateStr format: "2026-05-23"
  const parts = dateStr.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
}

function today() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function daysBetween(a, b) {
  const msPerDay = 86400000;
  return Math.round((b - a) / msPerDay);
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const MONTH_SHORT = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatCardDate(dateStr) {
  const d = parseDate(dateStr);
  return `SAT ${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`;
}

function formatLongDate(dateStr) {
  const d = parseDate(dateStr);
  return `Saturday, ${MONTH_NAMES[d.getMonth()]} ${d.getDate()}`;
}

function getMonthName(dateStr) {
  const d = parseDate(dateStr);
  return MONTH_NAMES[d.getMonth()];
}

function getMonthKey(dateStr) {
  const d = parseDate(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function countdownText(dateStr) {
  const d = parseDate(dateStr);
  const t = today();
  const diff = daysBetween(t, d);
  if (diff === 0) return 'today';
  if (diff === 1) return 'tomorrow';
  if (diff < 0) return `${Math.abs(diff)} days ago`;
  return `in ${diff} days`;
}

function mapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function getCategoryColor(categoryName) {
  if (typeof CATEGORIES !== 'undefined' && CATEGORIES[categoryName]) {
    return CATEGORIES[categoryName].color;
  }
  return '#8B8B8B';
}

function debounce(fn, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


// --------------------------------------------------
// FavoritesManager
// --------------------------------------------------
class FavoritesManager {
  constructor() {
    this._key = 'nyc-sat-favorites';
    this._favorites = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(this._key);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  _save() {
    localStorage.setItem(this._key, JSON.stringify(this._favorites));
  }

  toggle(id) {
    const numId = Number(id);
    const idx = this._favorites.indexOf(numId);
    if (idx === -1) {
      this._favorites.push(numId);
    } else {
      this._favorites.splice(idx, 1);
    }
    this._save();
    this._updateAllHearts(numId);
    return this.isFavorite(numId);
  }

  isFavorite(id) {
    return this._favorites.indexOf(Number(id)) !== -1;
  }

  getFavorites() {
    return [...this._favorites];
  }

  getCount() {
    return this._favorites.length;
  }

  _updateAllHearts(id) {
    const isFav = this.isFavorite(id);
    document.querySelectorAll(`.card__favorite[data-id="${id}"]`).forEach(btn => {
      btn.innerHTML = isFav ? ICONS.heartFilled : ICONS.heartOutline;
      btn.classList.toggle('card__favorite--active', isFav);
      btn.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Save to favorites');
    });
  }
}


// --------------------------------------------------
// SearchEngine
// --------------------------------------------------
class SearchEngine {
  constructor(saturdays) {
    this._saturdays = saturdays;
    this._index = this._buildIndex();
  }

  _buildIndex() {
    return this._saturdays.map(s => {
      const parts = [
        s.title,
        s.shortTitle,
        s.borough,
        s.budget,
        ...(s.categories || []),
      ];

      if (s.daytime) {
        parts.push(s.daytime.venue || '', s.daytime.title || '', s.daytime.description || '',
          s.daytime.address || '', s.daytime.bookingLabel || '', s.daytime.tip || '');
      }

      if (s.dinner && s.dinner.options) {
        s.dinner.options.forEach(opt => {
          parts.push(opt.name || '', opt.cuisine || '', opt.description || '',
            opt.address || '', opt.bookingPlatform || '');
        });
      }

      if (s.evening) {
        parts.push(s.evening.venue || '', s.evening.title || '', s.evening.description || '',
          s.evening.address || '', s.evening.bookingLabel || '', s.evening.tip || '');
      }

      if (s.bookingNote) parts.push(s.bookingNote);

      return {
        id: s.id,
        text: parts.join(' ').toLowerCase()
      };
    });
  }

  search(query) {
    if (!query || !query.trim()) return [];
    const terms = query.toLowerCase().trim().split(/\s+/);
    return this._index
      .filter(entry => terms.every(term => entry.text.indexOf(term) !== -1))
      .map(entry => entry.id);
  }

  highlight(text, query) {
    if (!query || !query.trim() || !text) return escapeHtml(text || '');
    const escaped = escapeHtml(text);
    const terms = query.trim().split(/\s+/);
    let result = escaped;
    terms.forEach(term => {
      if (!term) return;
      const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    });
    return result;
  }
}


// --------------------------------------------------
// ScrollManager
// --------------------------------------------------
class ScrollManager {
  constructor() {
    this._observer = null;
    this._currentMonth = '';
  }

  setupMonthObserver() {
    if (this._observer) {
      this._observer.disconnect();
    }

    const headers = document.querySelectorAll('.month-header');
    if (!headers.length) return;

    const currentMonthEl = document.getElementById('current-month');

    this._observer = new IntersectionObserver((entries) => {
      // Find the topmost visible month header
      let topEntry = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
            topEntry = entry;
          }
        }
      });

      if (topEntry && currentMonthEl) {
        const monthName = topEntry.target.textContent;
        if (monthName !== this._currentMonth) {
          this._currentMonth = monthName;
          currentMonthEl.textContent = monthName;
          currentMonthEl.classList.add('header-month--visible');
        }
      }
    }, {
      rootMargin: '-60px 0px -80% 0px',
      threshold: 0
    });

    headers.forEach(h => this._observer.observe(h));
  }

  setupProgressBar() {
    const fill = document.getElementById('progress-fill');
    const tooltip = document.getElementById('progress-tooltip');
    if (!fill) return;

    const t = today();
    let past = 0;
    const total = SATURDAYS.length;

    SATURDAYS.forEach(s => {
      if (parseDate(s.date) < t) past++;
    });

    const pct = total > 0 ? (past / total) * 100 : 0;
    fill.style.width = pct + '%';

    if (tooltip) {
      tooltip.textContent = `${past} of ${total} Saturdays done`;
    }
  }

  scrollToCard(saturdayId, expand) {
    const card = document.querySelector(`.card[data-id="${saturdayId}"]`);
    if (!card) return;

    // Switch to timeline view if needed
    if (document.getElementById('timeline-view').classList.contains('hidden')) {
      if (window.__app) window.__app.switchView('timeline');
      // Small delay to let DOM update
      requestAnimationFrame(() => {
        this._doScroll(card, expand);
      });
    } else {
      this._doScroll(card, expand);
    }
  }

  _doScroll(card, expand) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (expand && window.__app && window.__app.timelineView) {
      setTimeout(() => {
        window.__app.timelineView.expandCard(card);
      }, 400);
    }
    // Brief highlight animation
    card.classList.add('card--highlight');
    setTimeout(() => card.classList.remove('card--highlight'), 1500);
  }
}


// --------------------------------------------------
// TimelineView
// --------------------------------------------------
class TimelineView {
  constructor(favorites, scrollManager) {
    this._favorites = favorites;
    this._scrollManager = scrollManager;
    this._expandedCard = null;
    this._focusedIndex = -1;
    this._allCards = [];
  }

  render(container, saturdays) {
    container.innerHTML = '';
    this._allCards = [];

    // Group by month
    const monthGroups = new Map();
    saturdays.forEach(s => {
      const key = getMonthKey(s.date);
      if (!monthGroups.has(key)) {
        monthGroups.set(key, { name: getMonthName(s.date), items: [] });
      }
      monthGroups.get(key).items.push(s);
    });

    monthGroups.forEach((group, key) => {
      const section = this.renderMonthGroup(group.name, group.items, key);
      container.appendChild(section);
    });

    this.dimPastCards();
    this.highlightNextUp();
    this._scrollManager.setupMonthObserver();
  }

  renderMonthGroup(monthName, saturdays, key) {
    const section = document.createElement('section');
    section.className = 'month-section';

    const header = document.createElement('h2');
    header.className = 'month-header';
    header.id = `month-${monthName.toLowerCase()}`;
    header.textContent = monthName;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'month-cards';

    saturdays.forEach(s => {
      const card = this.renderCard(s);
      grid.appendChild(card);
      this._allCards.push(card);
    });

    section.appendChild(grid);
    return section;
  }

  renderCard(saturday) {
    const article = document.createElement('article');
    article.className = 'card';
    article.setAttribute('data-id', saturday.id);
    article.setAttribute('data-categories', (saturday.categories || []).join(','));
    article.setAttribute('data-borough', saturday.borough || '');
    article.setAttribute('data-budget', saturday.budget || '');
    article.tabIndex = 0;

    const primaryColor = getCategoryColor(saturday.primaryCategory);
    article.style.borderLeftColor = primaryColor;

    // Status classes
    const satDate = parseDate(saturday.date);
    const t = today();
    if (satDate < t) {
      article.classList.add('card--past');
    }

    // Card inner HTML
    const isFav = this._favorites.isFavorite(saturday.id);
    const hasNote = !!localStorage.getItem(`nyc-sat-notes-${saturday.id}`);

    const badges = (saturday.categories || []).map(cat => {
      const color = getCategoryColor(cat);
      return `<span class="badge" style="background: ${hexToRgba(color, 0.12)}; color: ${color}">${escapeHtml(cat)}</span>`;
    }).join('');

    const bookingBadge = saturday.bookingUrgency === 'high'
      ? `<span class="booking-badge">Book soon</span>`
      : '';

    const noteIcon = hasNote
      ? `<span class="card__note-icon" title="Has a note">${ICONS.note}</span>`
      : '';

    article.innerHTML = `
      <div class="card__header">
        <span class="card__date">${formatCardDate(saturday.date)}</span>
        <span class="card__budget">${escapeHtml(saturday.budget || '')}</span>
      </div>
      <h3 class="card__title">${escapeHtml(saturday.title)}</h3>
      <div class="card__meta">
        ${badges}
        <span class="card__borough">${escapeHtml(saturday.borough || '')}</span>
        ${bookingBadge}
        ${noteIcon}
      </div>
      <button class="card__favorite${isFav ? ' card__favorite--active' : ''}" data-id="${saturday.id}" aria-label="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
        ${isFav ? ICONS.heartFilled : ICONS.heartOutline}
      </button>
      <div class="card__expand-icon">
        ${ICONS.chevronDown}
      </div>
      <div class="card__details" aria-expanded="false">
        ${this.renderDetailPanel(saturday)}
      </div>
    `;

    // Event: favorite button
    const favBtn = article.querySelector('.card__favorite');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this._favorites.toggle(saturday.id);
    });

    // Event: expand/collapse on card click
    article.addEventListener('click', (e) => {
      // Do not toggle if clicking a link, button (other than card itself), input, or textarea inside expanded panel
      const target = e.target;
      if (target.closest('a') || target.closest('button:not(.card)') ||
          target.closest('input') || target.closest('textarea') ||
          target.closest('.card__favorite')) {
        return;
      }
      // If card is expanded and click is inside the details panel on non-interactive element, allow expand/collapse
      if (article.classList.contains('card--expanded') && target.closest('.card__details')) {
        // Only collapse if clicking outside of interactive areas
        if (target.closest('.detail-section') && !target.closest('a') && !target.closest('button') && !target.closest('textarea')) {
          return; // Let user read content without collapsing
        }
      }
      this.toggleCard(article);
    });

    return article;
  }

  renderDetailPanel(saturday) {
    let html = `<div class="detail-inner">`;
    html += `<p class="detail-date">${formatLongDate(saturday.date)}</p>`;

    // Daytime section
    if (saturday.daytime) {
      html += this._renderActivitySection('Daytime', saturday.daytime);
    }

    // Dinner section
    if (saturday.dinner) {
      html += `<div class="detail-section detail-section--dinner">`;
      html += `<h4 class="detail-section__title">Dinner</h4>`;
      if (saturday.dinner.options && saturday.dinner.options.length) {
        html += `<div class="dinner-options">`;
        saturday.dinner.options.forEach((opt, i) => {
          html += `<div class="dinner-option">`;
          html += `<h5 class="dinner-option__name">`;
          if (opt.url) {
            html += `<a href="${escapeHtml(opt.url)}" target="_blank" rel="noopener">${escapeHtml(opt.name || 'Option ' + (i + 1))} ${ICONS.externalLink}</a>`;
          } else {
            html += escapeHtml(opt.name || 'Option ' + (i + 1));
          }
          html += `</h5>`;
          if (opt.cuisine) {
            html += `<span class="dinner-option__cuisine">${escapeHtml(opt.cuisine)}</span>`;
          }
          if (opt.description) {
            html += `<p class="dinner-option__desc">${escapeHtml(opt.description)}</p>`;
          }
          if (opt.address) {
            html += `<p class="dinner-option__address"><a href="${mapsLink(opt.address)}" target="_blank" rel="noopener">${ICONS.mapPin} ${escapeHtml(opt.address)}</a></p>`;
          }
          if (opt.cost) {
            html += `<span class="dinner-option__cost">${escapeHtml(opt.cost)}</span>`;
          }
          if (opt.bookingUrl) {
            html += `<a href="${escapeHtml(opt.bookingUrl)}" target="_blank" rel="noopener" class="detail-booking-link">${escapeHtml(opt.bookingPlatform || 'Reserve')} ${ICONS.externalLink}</a>`;
          }
          if (opt.tip) {
            html += `<p class="dinner-option__tip"><strong>Tip:</strong> ${escapeHtml(opt.tip)}</p>`;
          }
          html += `</div>`;
        });
        html += `</div>`;
      }
      html += `</div>`;
    }

    // Evening section
    if (saturday.evening) {
      html += this._renderActivitySection('Evening', saturday.evening);
    }

    // Booking note
    if (saturday.bookingNote) {
      html += `<p class="detail-booking-note">${escapeHtml(saturday.bookingNote)}</p>`;
    }

    // Actions row: add to calendar + notes
    html += `<div class="detail-actions">`;
    html += `<button class="detail-action-btn detail-ics-btn" data-id="${saturday.id}">${ICONS.calendar} Add to calendar</button>`;
    html += `<button class="detail-action-btn detail-note-btn" data-id="${saturday.id}">${ICONS.note} ${localStorage.getItem(`nyc-sat-notes-${saturday.id}`) ? 'Edit note' : 'Add a note'}</button>`;
    html += `</div>`;

    // Notes area (hidden by default)
    const existingNote = localStorage.getItem(`nyc-sat-notes-${saturday.id}`) || '';
    html += `<div class="detail-notes${existingNote ? ' detail-notes--has-content' : ''}" data-id="${saturday.id}" style="display:none;">`;
    html += `<textarea class="detail-notes__textarea" placeholder="Add a personal note for this Saturday..." data-id="${saturday.id}">${escapeHtml(existingNote)}</textarea>`;
    html += `<div class="detail-notes__actions">`;
    html += `<button class="detail-notes__save" data-id="${saturday.id}">Save note</button>`;
    html += `</div>`;
    html += `</div>`;

    html += `</div>`;
    return html;
  }

  _renderActivitySection(label, activity) {
    let html = `<div class="detail-section detail-section--${label.toLowerCase()}">`;
    html += `<h4 class="detail-section__title">${escapeHtml(label)}</h4>`;

    if (activity.title) {
      html += `<h5 class="detail-section__subtitle">`;
      if (activity.url) {
        html += `<a href="${escapeHtml(activity.url)}" target="_blank" rel="noopener">${escapeHtml(activity.title)} ${ICONS.externalLink}</a>`;
      } else {
        html += escapeHtml(activity.title);
      }
      html += `</h5>`;
    }

    if (activity.venue) {
      html += `<p class="detail-venue">${escapeHtml(activity.venue)}</p>`;
    }

    if (activity.description) {
      html += `<p class="detail-desc">${escapeHtml(activity.description)}</p>`;
    }

    if (activity.address) {
      html += `<p class="detail-address"><a href="${mapsLink(activity.address)}" target="_blank" rel="noopener">${ICONS.mapPin} ${escapeHtml(activity.address)}</a></p>`;
    }

    if (activity.time) {
      html += `<p class="detail-time">${escapeHtml(activity.time)}</p>`;
    }

    if (activity.cost || activity.bookingUrl) {
      html += `<div class="detail-logistics">`;
      if (activity.cost) {
        html += `<span class="detail-cost">${escapeHtml(activity.cost)}</span>`;
      }
      if (activity.bookingUrl) {
        const label = activity.bookingLabel || 'Book / Tickets';
        html += `<a href="${escapeHtml(activity.bookingUrl)}" target="_blank" rel="noopener" class="detail-booking-link">${escapeHtml(label)} ${ICONS.externalLink}</a>`;
      }
      html += `</div>`;
    }

    if (activity.tip) {
      html += `<p class="detail-tip"><strong>Tip:</strong> ${escapeHtml(activity.tip)}</p>`;
    }

    html += `</div>`;
    return html;
  }

  toggleCard(cardEl) {
    if (cardEl.classList.contains('card--expanded')) {
      this.collapseCard(cardEl);
    } else {
      this.expandCard(cardEl);
    }
  }

  expandCard(cardEl) {
    const details = cardEl.querySelector('.card__details');
    if (!details) return;

    if (this._expandedCard && this._expandedCard !== cardEl) {
      const prev = this._expandedCard;
      this._collapseInstant(prev);
    }

    cardEl.classList.add('card--expanded');
    cardEl.classList.remove('card--transition-done');
    details.setAttribute('aria-expanded', 'true');
    details.style.maxHeight = details.scrollHeight + 'px';

    this._expandedCard = cardEl;
    this._setupDetailListeners(cardEl);

    const onDone = (e) => {
      if (e.propertyName !== 'max-height') return;
      details.removeEventListener('transitionend', onDone);
      cardEl.classList.add('card--transition-done');
      details.style.maxHeight = details.scrollHeight + 'px';
    };
    details.addEventListener('transitionend', onDone);

    requestAnimationFrame(() => {
      const isMobile = window.innerWidth <= 768;
      cardEl.scrollIntoView({ behavior: 'smooth', block: isMobile ? 'start' : 'nearest' });
    });
  }

  collapseCard(cardEl) {
    const details = cardEl.querySelector('.card__details');
    if (!details) return;

    const cardRect = cardEl.getBoundingClientRect();
    const collapseHeight = details.scrollHeight;

    cardEl.classList.remove('card--expanded');
    cardEl.classList.remove('card--transition-done');
    details.setAttribute('aria-expanded', 'false');
    details.style.maxHeight = '0';

    if (cardRect.top < 0 && collapseHeight > 0) {
      window.scrollBy(0, -collapseHeight);
    }

    if (this._expandedCard === cardEl) {
      this._expandedCard = null;
    }
  }

  _collapseInstant(cardEl) {
    const details = cardEl.querySelector('.card__details');
    if (!details) return;

    const cardRect = cardEl.getBoundingClientRect();
    const collapseHeight = details.scrollHeight;

    details.style.transition = 'none';
    details.style.maxHeight = '0';
    cardEl.classList.remove('card--expanded');
    cardEl.classList.remove('card--transition-done');
    details.setAttribute('aria-expanded', 'false');

    if (cardRect.top < 0 && collapseHeight > 0) {
      window.scrollBy(0, -collapseHeight);
    }

    requestAnimationFrame(() => {
      details.style.transition = '';
    });

    if (this._expandedCard === cardEl) {
      this._expandedCard = null;
    }
  }

  collapseAll() {
    document.querySelectorAll('.card--expanded').forEach(card => {
      this.collapseCard(card);
    });
  }

  _setupDetailListeners(cardEl) {
    const satId = cardEl.getAttribute('data-id');

    // ICS download button
    const icsBtn = cardEl.querySelector('.detail-ics-btn');
    if (icsBtn && !icsBtn._bound) {
      icsBtn._bound = true;
      icsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this._downloadIcs(satId);
      });
    }

    // Note toggle button
    const noteBtn = cardEl.querySelector('.detail-note-btn');
    if (noteBtn && !noteBtn._bound) {
      noteBtn._bound = true;
      noteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const notesArea = cardEl.querySelector(`.detail-notes[data-id="${satId}"]`);
        if (notesArea) {
          const isHidden = notesArea.style.display === 'none';
          notesArea.style.display = isHidden ? 'block' : 'none';
          // Recalculate max-height
          const details = cardEl.querySelector('.card__details');
          if (details) {
            requestAnimationFrame(() => {
              details.style.maxHeight = details.scrollHeight + 'px';
            });
          }
          if (isHidden) {
            const textarea = notesArea.querySelector('textarea');
            if (textarea) textarea.focus();
          }
        }
      });
    }

    // Note save button
    const saveBtn = cardEl.querySelector('.detail-notes__save');
    if (saveBtn && !saveBtn._bound) {
      saveBtn._bound = true;
      saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textarea = cardEl.querySelector(`.detail-notes__textarea[data-id="${satId}"]`);
        if (textarea) {
          const val = textarea.value.trim();
          if (val) {
            localStorage.setItem(`nyc-sat-notes-${satId}`, val);
          } else {
            localStorage.removeItem(`nyc-sat-notes-${satId}`);
          }
          // Update note icon on card
          this._updateNoteIcon(cardEl, satId, !!val);
          // Brief save confirmation
          saveBtn.textContent = 'Saved!';
          setTimeout(() => { saveBtn.textContent = 'Save note'; }, 1500);
        }
      });
    }

    // Prevent textarea clicks from collapsing card
    const textarea = cardEl.querySelector('.detail-notes__textarea');
    if (textarea && !textarea._bound) {
      textarea._bound = true;
      textarea.addEventListener('click', e => e.stopPropagation());
      textarea.addEventListener('keydown', e => e.stopPropagation());
    }
  }

  _updateNoteIcon(cardEl, satId, hasNote) {
    const meta = cardEl.querySelector('.card__meta');
    if (!meta) return;
    let icon = meta.querySelector('.card__note-icon');
    if (hasNote && !icon) {
      const span = document.createElement('span');
      span.className = 'card__note-icon';
      span.title = 'Has a note';
      span.innerHTML = ICONS.note;
      meta.appendChild(span);
    } else if (!hasNote && icon) {
      icon.remove();
    }
  }

  _downloadIcs(satId) {
    const saturday = SATURDAYS.find(s => s.id === Number(satId));
    if (!saturday) return;

    const d = parseDate(saturday.date);
    const dateStr = saturday.date.replace(/-/g, '');

    let description = '';
    if (saturday.daytime) {
      description += `DAYTIME: ${saturday.daytime.title || saturday.daytime.venue || ''}`;
      if (saturday.daytime.description) description += ` - ${saturday.daytime.description}`;
      if (saturday.daytime.address) description += `\\nAddress: ${saturday.daytime.address}`;
      if (saturday.daytime.time) description += `\\nTime: ${saturday.daytime.time}`;
      description += '\\n\\n';
    }
    if (saturday.dinner && saturday.dinner.options) {
      description += 'DINNER OPTIONS:\\n';
      saturday.dinner.options.forEach((opt, i) => {
        description += `${i + 1}. ${opt.name || 'Option'}`;
        if (opt.cuisine) description += ` (${opt.cuisine})`;
        if (opt.address) description += `\\nAddress: ${opt.address}`;
        description += '\\n';
      });
      description += '\\n';
    }
    if (saturday.evening) {
      description += `EVENING: ${saturday.evening.title || saturday.evening.venue || ''}`;
      if (saturday.evening.description) description += ` - ${saturday.evening.description}`;
      if (saturday.evening.address) description += `\\nAddress: ${saturday.evening.address}`;
      description += '\\n';
    }

    const uid = `nyc-sat-${satId}@ournychsaturdays`;
    const now = new Date();
    const stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Our NYC Saturdays//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${dateStr}`,
      `DTEND;VALUE=DATE:${dateStr}`,
      `SUMMARY:${saturday.title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${saturday.borough || 'New York City'}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nyc-saturday-${saturday.date}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  highlightNextUp() {
    const t = today();
    let nextSaturday = null;
    let todaySaturday = null;

    for (let i = 0; i < SATURDAYS.length; i++) {
      const d = parseDate(SATURDAYS[i].date);
      if (d.getTime() === t.getTime()) {
        todaySaturday = SATURDAYS[i];
        break;
      }
      if (d > t && !nextSaturday) {
        nextSaturday = SATURDAYS[i];
      }
    }

    const target = todaySaturday || nextSaturday;
    if (!target) return; // All Saturdays are past

    const card = document.querySelector(`.card[data-id="${target.id}"]`);
    if (!card) return;

    if (todaySaturday) {
      card.classList.add('card--today');
    } else {
      card.classList.add('card--next');
    }

    // Add label
    const label = document.createElement('span');
    label.className = 'card__upcoming-label';
    if (todaySaturday) {
      label.textContent = 'Today!';
    } else {
      const diff = daysBetween(t, parseDate(target.date));
      label.textContent = diff === 1 ? 'Coming Up - tomorrow' : `Coming Up - in ${diff} days`;
    }

    card.insertBefore(label, card.firstChild);
  }

  dimPastCards() {
    // Dimming is handled via .card--past CSS class already applied in renderCard
  }

  // Keyboard navigation helpers
  getFocusedIndex() {
    return this._focusedIndex;
  }

  setFocusedIndex(idx) {
    if (idx < 0) idx = 0;
    if (idx >= this._allCards.length) idx = this._allCards.length - 1;
    this._focusedIndex = idx;

    // Remove focus from all
    this._allCards.forEach(c => c.classList.remove('card--focused'));

    if (this._allCards[idx]) {
      this._allCards[idx].classList.add('card--focused');
      this._allCards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      this._allCards[idx].focus();
    }
  }

  getCardCount() {
    return this._allCards.length;
  }

  getFocusedCard() {
    if (this._focusedIndex >= 0 && this._focusedIndex < this._allCards.length) {
      return this._allCards[this._focusedIndex];
    }
    return null;
  }
}


// --------------------------------------------------
// CalendarView
// --------------------------------------------------
class CalendarView {
  constructor(scrollManager) {
    this._scrollManager = scrollManager;
  }

  render(container, saturdays) {
    container.innerHTML = '';

    const grid = document.getElementById('calendar-grid') || container;
    grid.innerHTML = '';

    // Group by month
    const monthGroups = new Map();
    saturdays.forEach(s => {
      const month = getMonthName(s.date);
      if (!monthGroups.has(month)) {
        monthGroups.set(month, []);
      }
      monthGroups.get(month).push(s);
    });

    monthGroups.forEach((sats, month) => {
      const col = this.renderMonthColumn(month, sats);
      grid.appendChild(col);
    });
  }

  renderMonthColumn(month, saturdays) {
    const col = document.createElement('div');
    col.className = 'cal-month';

    const header = document.createElement('h3');
    header.className = 'cal-month__header';
    header.textContent = month;
    col.appendChild(header);

    saturdays.forEach(s => {
      const cell = this.renderCell(s);
      col.appendChild(cell);
    });

    return col;
  }

  renderCell(saturday) {
    const d = parseDate(saturday.date);
    const t = today();

    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    cell.setAttribute('data-id', saturday.id);

    if (d < t) cell.classList.add('cal-cell--past');
    if (d.getTime() === t.getTime()) cell.classList.add('cal-cell--today');

    const badges = (saturday.categories || []).map(cat => {
      const color = getCategoryColor(cat);
      return `<span class="cal-badge" style="background: ${hexToRgba(color, 0.15)}; color: ${color}">${escapeHtml(cat)}</span>`;
    }).join('');

    const budgetDots = (saturday.budget || '').length;

    cell.innerHTML = `
      <div class="cal-cell__top">
        <span class="cal-cell__day">${d.getDate()}</span>
        <span class="cal-cell__budget">${'$'.repeat(budgetDots)}</span>
      </div>
      <span class="cal-cell__title">${escapeHtml(saturday.shortTitle || saturday.title)}</span>
      <span class="cal-cell__borough">${escapeHtml(saturday.borough || '')}</span>
      <div class="cal-cell__badges">${badges}</div>
    `;

    cell.addEventListener('click', () => {
      this.onCellClick(saturday.id);
    });

    return cell;
  }

  onCellClick(saturdayId) {
    this._scrollManager.scrollToCard(saturdayId, true);
  }
}


// --------------------------------------------------
// FilterView
// --------------------------------------------------
class FilterView {
  constructor(favorites, scrollManager) {
    this._favorites = favorites;
    this._scrollManager = scrollManager;
    this._activeFilters = {
      categories: new Set(),
      boroughs: new Set(),
      budgets: new Set(),
      favoritesOnly: false
    };
  }

  render(container, saturdays) {
    const filterBar = document.getElementById('filter-bar') || container;
    const filterResults = document.getElementById('filter-results') || container;

    filterBar.innerHTML = '';
    filterResults.innerHTML = '';

    this.renderFilterBar(filterBar, saturdays);
    this.renderResults(filterResults, this.getFilteredSaturdays(saturdays));
  }

  renderFilterBar(filterBar, saturdays) {
    const allCategories = Object.keys(typeof CATEGORIES !== 'undefined' ? CATEGORIES : {});

    const allBoroughs = [];
    const boroughSet = new Set();
    (saturdays || SATURDAYS).forEach(s => {
      if (s.borough && !boroughSet.has(s.borough)) {
        boroughSet.add(s.borough);
        allBoroughs.push(s.borough);
      }
    });

    const allBudgets = ['$', '$$', '$$$', '$$$$'];

    let html = '';

    // Categories
    html += `<div class="filter-group">`;
    html += `<span class="filter-group__label">Category</span>`;
    html += `<div class="filter-pills">`;
    allCategories.forEach(cat => {
      const active = this._activeFilters.categories.has(cat) ? ' filter-pill--active' : '';
      const color = getCategoryColor(cat);
      html += `<button class="filter-pill${active}" data-type="categories" data-value="${escapeHtml(cat)}" style="--pill-color: ${color}">${escapeHtml(cat)}</button>`;
    });
    html += `</div></div>`;

    // Boroughs
    html += `<div class="filter-group">`;
    html += `<span class="filter-group__label">Borough</span>`;
    html += `<div class="filter-pills">`;
    allBoroughs.forEach(b => {
      const active = this._activeFilters.boroughs.has(b) ? ' filter-pill--active' : '';
      html += `<button class="filter-pill${active}" data-type="boroughs" data-value="${escapeHtml(b)}">${escapeHtml(b)}</button>`;
    });
    html += `</div></div>`;

    // Budget
    html += `<div class="filter-group">`;
    html += `<span class="filter-group__label">Budget</span>`;
    html += `<div class="filter-pills">`;
    allBudgets.forEach(b => {
      const active = this._activeFilters.budgets.has(b) ? ' filter-pill--active' : '';
      html += `<button class="filter-pill${active}" data-type="budgets" data-value="${escapeHtml(b)}">${escapeHtml(b)}</button>`;
    });
    html += `</div></div>`;

    // Favorites
    const favCount = this._favorites.getCount();
    if (favCount > 0) {
      html += `<div class="filter-group">`;
      html += `<div class="filter-pills">`;
      const favActive = this._activeFilters.favoritesOnly ? ' filter-pill--active' : '';
      html += `<button class="filter-pill filter-pill--favorites${favActive}" data-type="favoritesOnly" data-value="true">${ICONS.heartFilled} Favorites (${favCount})</button>`;
      html += `</div></div>`;
    }

    // Clear all
    const hasAnyFilter = this._activeFilters.categories.size > 0 ||
      this._activeFilters.boroughs.size > 0 ||
      this._activeFilters.budgets.size > 0 ||
      this._activeFilters.favoritesOnly;

    if (hasAnyFilter) {
      html += `<button class="filter-clear" id="filter-clear">Clear all filters</button>`;
    }

    filterBar.innerHTML = html;

    // Attach listeners
    filterBar.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const type = pill.getAttribute('data-type');
        const value = pill.getAttribute('data-value');
        this.toggleFilter(type, value);
        this.render(null, saturdays || SATURDAYS);
      });
    });

    const clearBtn = filterBar.querySelector('#filter-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearFilters();
        this.render(null, saturdays || SATURDAYS);
      });
    }
  }

  renderResults(resultsContainer, filtered) {
    if (!resultsContainer) {
      resultsContainer = document.getElementById('filter-results');
    }
    if (!resultsContainer) return;

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<p class="filter-empty">No Saturdays match your filters. Try removing some.</p>`;
      return;
    }

    const hasAnyFilter = this._activeFilters.categories.size > 0 ||
      this._activeFilters.boroughs.size > 0 ||
      this._activeFilters.budgets.size > 0 ||
      this._activeFilters.favoritesOnly;

    let html = `<p class="filter-count">${filtered.length} Saturday${filtered.length !== 1 ? 's' : ''}${hasAnyFilter ? ' matched' : ''}</p>`;
    html += `<div class="filter-list">`;

    filtered.forEach(s => {
      const primaryColor = getCategoryColor(s.primaryCategory);
      const isPast = parseDate(s.date) < today();
      html += `
        <div class="filter-item${isPast ? ' filter-item--past' : ''}" data-id="${s.id}">
          <span class="filter-item__color" style="background: ${primaryColor}"></span>
          <span class="filter-item__date">${formatCardDate(s.date)}</span>
          <span class="filter-item__title">${escapeHtml(s.shortTitle || s.title)}</span>
          <span class="filter-item__borough">${escapeHtml(s.borough || '')}</span>
          <span class="filter-item__budget">${escapeHtml(s.budget || '')}</span>
        </div>
      `;
    });

    html += `</div>`;
    resultsContainer.innerHTML = html;

    // Click to jump to card
    resultsContainer.querySelectorAll('.filter-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        this._scrollManager.scrollToCard(id, true);
      });
    });
  }

  toggleFilter(type, value) {
    if (type === 'favoritesOnly') {
      this._activeFilters.favoritesOnly = !this._activeFilters.favoritesOnly;
    } else if (this._activeFilters[type]) {
      if (this._activeFilters[type].has(value)) {
        this._activeFilters[type].delete(value);
      } else {
        this._activeFilters[type].add(value);
      }
    }
  }

  clearFilters() {
    this._activeFilters.categories.clear();
    this._activeFilters.boroughs.clear();
    this._activeFilters.budgets.clear();
    this._activeFilters.favoritesOnly = false;
  }

  getFilteredSaturdays(saturdays) {
    const src = saturdays || SATURDAYS;
    return src.filter(s => {
      // Categories: OR within group
      if (this._activeFilters.categories.size > 0) {
        const cats = s.categories || [];
        if (!cats.some(c => this._activeFilters.categories.has(c))) return false;
      }

      // Boroughs: OR within group
      if (this._activeFilters.boroughs.size > 0) {
        if (!this._activeFilters.boroughs.has(s.borough)) return false;
      }

      // Budgets: OR within group
      if (this._activeFilters.budgets.size > 0) {
        if (!this._activeFilters.budgets.has(s.budget)) return false;
      }

      // Favorites
      if (this._activeFilters.favoritesOnly) {
        if (!this._favorites.isFavorite(s.id)) return false;
      }

      return true;
    });
  }
}


// --------------------------------------------------
// App
// --------------------------------------------------
class App {
  constructor() {
    this.favorites = new FavoritesManager();
    this.scrollManager = new ScrollManager();
    this.searchEngine = new SearchEngine(SATURDAYS);
    this.timelineView = new TimelineView(this.favorites, this.scrollManager);
    this.calendarView = new CalendarView(this.scrollManager);
    this.filterView = new FilterView(this.favorites, this.scrollManager);

    this._currentView = 'timeline';
    this._searchOpen = false;
    this._searchQuery = '';

    window.__app = this;
  }

  init() {
    this.updateSeasonTheme();
    this._renderInitialView();
    this._setupViewSwitcher();
    this._setupSearch();
    this._setupKeyboard();
    this._setupSurpriseMe();
    this._setupFullIcsDownload();
    this._restoreFromHash();
    this.scrollManager.setupProgressBar();
  }

  switchView(viewName) {
    if (!['timeline', 'calendar', 'filter'].includes(viewName)) return;

    this._currentView = viewName;

    // Update view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });

    // Show/hide containers
    const views = {
      timeline: document.getElementById('timeline-view'),
      calendar: document.getElementById('calendar-view'),
      filter: document.getElementById('filter-view')
    };

    Object.entries(views).forEach(([name, el]) => {
      if (el) el.classList.toggle('hidden', name !== viewName);
    });

    // Render the target view if needed
    if (viewName === 'calendar') {
      this.calendarView.render(views.calendar, SATURDAYS);
    } else if (viewName === 'filter') {
      this.filterView.render(views.filter, SATURDAYS);
    } else if (viewName === 'timeline') {
      // Re-setup month observer after switch
      this.scrollManager.setupMonthObserver();
    }

    // Update hash
    window.location.hash = viewName;
  }

  getCurrentSeason() {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
  }

  updateSeasonTheme() {
    const season = this.getCurrentSeason();
    document.body.className = document.body.className
      .replace(/season-\w+/g, '')
      .trim();
    document.body.classList.add(`season-${season}`);
  }

  // -- Private methods --

  _renderInitialView() {
    const container = document.getElementById('timeline-view');
    if (container) {
      this.timelineView.render(container, SATURDAYS);
    }
  }

  _setupViewSwitcher() {
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (view) this.switchView(view);
      });
    });
  }

  _setupSearch() {
    const toggle = document.getElementById('search-toggle');
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    const closeBtn = document.getElementById('search-close');
    const results = document.getElementById('search-results');

    if (!toggle || !overlay || !input) return;

    const openSearch = () => {
      this._searchOpen = true;
      overlay.classList.add('search-overlay--open');
      overlay.setAttribute('aria-hidden', 'false');
      input.value = this._searchQuery;
      input.focus();
    };

    const closeSearch = () => {
      this._searchOpen = false;
      overlay.classList.remove('search-overlay--open');
      overlay.setAttribute('aria-hidden', 'true');
      this._searchQuery = '';
      input.value = '';
      if (results) results.innerHTML = '';
      // Restore all cards visibility
      document.querySelectorAll('.card').forEach(c => c.classList.remove('card--search-hidden'));
      document.querySelectorAll('.month-section').forEach(s => s.classList.remove('month-section--search-hidden'));
    };

    toggle.addEventListener('click', () => {
      if (this._searchOpen) {
        closeSearch();
      } else {
        openSearch();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeSearch);
    }

    const doSearch = debounce(() => {
      const query = input.value.trim();
      this._searchQuery = query;

      if (!query) {
        if (results) results.innerHTML = '';
        document.querySelectorAll('.card').forEach(c => c.classList.remove('card--search-hidden'));
        document.querySelectorAll('.month-section').forEach(s => s.classList.remove('month-section--search-hidden'));
        return;
      }

      const matchIds = this.searchEngine.search(query);
      const matchSet = new Set(matchIds);

      // Show search results in overlay
      if (results) {
        if (matchIds.length === 0) {
          results.innerHTML = `<p class="search-no-results">No results for "${escapeHtml(query)}"</p>`;
        } else {
          let html = '';
          matchIds.forEach(id => {
            const s = SATURDAYS.find(sat => sat.id === id);
            if (!s) return;
            html += `
              <div class="search-result" data-id="${s.id}">
                <span class="search-result__date">${formatCardDate(s.date)}</span>
                <span class="search-result__title">${this.searchEngine.highlight(s.title, query)}</span>
                <span class="search-result__borough">${escapeHtml(s.borough || '')}</span>
              </div>
            `;
          });
          results.innerHTML = html;

          results.querySelectorAll('.search-result').forEach(r => {
            r.addEventListener('click', () => {
              const id = r.getAttribute('data-id');
              closeSearch();
              this.scrollManager.scrollToCard(id, true);
            });
          });
        }
      }

      // Filter visible cards in timeline
      if (this._currentView === 'timeline') {
        document.querySelectorAll('.card').forEach(card => {
          const cardId = Number(card.getAttribute('data-id'));
          card.classList.toggle('card--search-hidden', !matchSet.has(cardId));
        });

        // Hide month sections with no visible cards
        document.querySelectorAll('.month-section').forEach(section => {
          const visibleCards = section.querySelectorAll('.card:not(.card--search-hidden)');
          section.classList.toggle('month-section--search-hidden', visibleCards.length === 0);
        });
      }
    }, 200);

    input.addEventListener('input', doSearch);

    // Store references for keyboard handler
    this._openSearch = openSearch;
    this._closeSearch = closeSearch;
  }

  _setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      // Ignore if user is typing in an input or textarea (unless it's the search input)
      const tag = e.target.tagName.toLowerCase();
      const isSearchInput = e.target.id === 'search-input';

      if ((tag === 'input' || tag === 'textarea') && !isSearchInput) return;

      // Escape: close search or collapse expanded card
      if (e.key === 'Escape') {
        if (this._searchOpen) {
          this._closeSearch();
        } else {
          this.timelineView.collapseAll();
        }
        return;
      }

      // If search is open, only Escape should work from above
      if (this._searchOpen) return;

      // / : open search
      if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        this._openSearch();
        return;
      }

      // 1/2/3: switch views
      if (e.key === '1' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        this.switchView('timeline');
        return;
      }
      if (e.key === '2' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        this.switchView('calendar');
        return;
      }
      if (e.key === '3' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        this.switchView('filter');
        return;
      }

      // j/k: navigate cards in timeline view
      if (this._currentView === 'timeline') {
        if (e.key === 'j' || e.key === 'ArrowDown') {
          e.preventDefault();
          const idx = this.timelineView.getFocusedIndex();
          this.timelineView.setFocusedIndex(idx + 1);
          return;
        }
        if (e.key === 'k' || e.key === 'ArrowUp') {
          e.preventDefault();
          const idx = this.timelineView.getFocusedIndex();
          this.timelineView.setFocusedIndex(idx - 1);
          return;
        }

        // Enter/Space: expand/collapse focused card
        if (e.key === 'Enter' || e.key === ' ') {
          const card = this.timelineView.getFocusedCard();
          if (card) {
            e.preventDefault();
            this.timelineView.toggleCard(card);
          }
          return;
        }

        // f: toggle favorite on focused card
        if (e.key === 'f' && !e.metaKey && !e.ctrlKey) {
          const card = this.timelineView.getFocusedCard();
          if (card) {
            const id = card.getAttribute('data-id');
            if (id) this.favorites.toggle(id);
          }
          return;
        }
      }
    });
  }

  _setupSurpriseMe() {
    const btn = document.getElementById('surprise-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const t = today();
      const upcoming = SATURDAYS.filter(s => parseDate(s.date) >= t);
      if (upcoming.length === 0) {
        // All Saturdays are past - pick random from all
        const random = SATURDAYS[Math.floor(Math.random() * SATURDAYS.length)];
        this._surpriseReveal(random.id);
        return;
      }
      const random = upcoming[Math.floor(Math.random() * upcoming.length)];
      this._surpriseReveal(random.id);
    });
  }

  _surpriseReveal(satId) {
    // Switch to timeline and scroll to card
    this.switchView('timeline');
    setTimeout(() => {
      const card = document.querySelector(`.card[data-id="${satId}"]`);
      if (card) {
        card.classList.add('card--surprise');
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          this.timelineView.expandCard(card);
          setTimeout(() => card.classList.remove('card--surprise'), 2000);
        }, 500);
      }
    }, 100);
  }

  _setupFullIcsDownload() {
    const link = document.getElementById('download-ics');
    if (!link) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      this._downloadFullIcs();
    });
  }

  _downloadFullIcs() {
    const now = new Date();
    const stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

    let events = '';
    SATURDAYS.forEach(s => {
      const dateStr = s.date.replace(/-/g, '');
      let description = s.title;
      if (s.daytime && s.daytime.venue) {
        description += `\\nDaytime: ${s.daytime.venue}`;
      }
      if (s.dinner && s.dinner.options && s.dinner.options[0]) {
        description += `\\nDinner: ${s.dinner.options[0].name || ''}`;
      }
      if (s.evening && s.evening.venue) {
        description += `\\nEvening: ${s.evening.venue}`;
      }

      events += [
        'BEGIN:VEVENT',
        `UID:nyc-sat-${s.id}@ournycsaturdays`,
        `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${dateStr}`,
        `DTEND;VALUE=DATE:${dateStr}`,
        `SUMMARY:${s.title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${s.borough || 'New York City'}`,
        'END:VEVENT',
        ''
      ].join('\r\n');
    });

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Our NYC Saturdays//EN',
      'CALSCALE:GREGORIAN',
      'X-WR-CALNAME:Our NYC Saturdays',
      events.trim(),
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'our-nyc-saturdays.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  _restoreFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (['timeline', 'calendar', 'filter'].includes(hash)) {
      this.switchView(hash);
    }

    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#', '');
      if (['timeline', 'calendar', 'filter'].includes(h) && h !== this._currentView) {
        this.switchView(h);
      }
    });
  }
}


// --------------------------------------------------
// Helper: hex color to rgba string
// --------------------------------------------------
function hexToRgba(hex, alpha) {
  if (!hex) return `rgba(139,139,139,${alpha})`;

  // Remove # if present
  hex = hex.replace('#', '');

  // Handle shorthand hex
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return `rgba(139,139,139,${alpha})`;
  }

  return `rgba(${r},${g},${b},${alpha})`;
}


// --------------------------------------------------
// Initialize on DOMContentLoaded
// --------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
