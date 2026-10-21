/**
 * Pietro Dardano - Website Engine (YAGNI / Vanilla JS)
 * Renders data from window.SITE_DATA, manages theme, telemetry, and interactions.
 */

(function () {
  'use strict';

  // 1. Analytics & Privacy-first Telemetry (Umami Cloud - Write-only)
  function initAnalytics(analyticsConfig) {
    if (!analyticsConfig || !analyticsConfig.umamiWebsiteId) return;

    if (document.querySelector('script[src*="umami.is"]')) return;

    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://cloud.umami.is/script.js';
    script.setAttribute('data-website-id', analyticsConfig.umamiWebsiteId);
    document.head.appendChild(script);
  }

  function trackEvent(eventName, eventData = {}) {
    if (window.umami && typeof window.umami.track === 'function') {
      try {
        window.umami.track(eventName, eventData);
      } catch (err) {
        // Fail silently
      }
    }
  }

  // 2. Theme Management
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.textContent = theme === 'dark' ? '☀ Light' : '☾ Dark';
    }
  }

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      trackEvent('toggle_theme', { theme: next });
    });
  }

  // 3. Render Profile & Sidebar
  function renderProfile(profile) {
    const avatarEl = document.getElementById('profile-avatar');
    if (avatarEl && profile.avatar) {
      avatarEl.src = profile.avatar;
      avatarEl.alt = profile.name;
    }

    const nameEl = document.getElementById('profile-name');
    if (nameEl) nameEl.textContent = profile.name;

    const titleEl = document.getElementById('profile-title');
    if (titleEl) titleEl.textContent = profile.title;

    const affilEl = document.getElementById('profile-affiliations');
    if (affilEl && profile.affiliations) {
      affilEl.innerHTML = profile.affiliations
        .map(a => `<div><a href="${a.url}" target="_blank" rel="noopener">${a.name}</a></div>`)
        .join('');
    }

    const linksEl = document.getElementById('profile-links');
    if (linksEl && profile.links) {
      linksEl.innerHTML = profile.links
        .map(l => `<a class="link-btn" href="${l.url}" target="_blank" rel="noopener" data-platform="${l.name}">${getIconSvg(l.icon)}<span>${l.name}</span></a>`)
        .join('');

      linksEl.querySelectorAll('.link-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          trackEvent('social_link_click', { platform: btn.getAttribute('data-platform') });
        });
      });
    }

    const cvBtn = document.getElementById('cv-button');
    if (cvBtn && profile.resume) {
      cvBtn.href = profile.resume;
      cvBtn.addEventListener('click', () => {
        trackEvent('cv_download', { file: 'resume.pdf' });
      });
    }
  }

  // Helper icons (minimal SVG)
  function getIconSvg(type) {
    switch (type) {
      case 'scholar':
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>`;
      case 'orcid':
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .977.436.977.978s-.436.978-.977.978-.978-.436-.978-.978.436-.978.978-.978zm-.884 4.542h1.768v10.702H6.485V8.92zm4.512 0h4.437c3.275 0 5.258 2.052 5.258 5.351 0 3.298-1.983 5.351-5.258 5.351h-4.437V8.92zm1.768 1.637v7.428h2.669c2.25 0 3.518-1.393 3.518-3.714 0-2.321-1.268-3.714-3.518-3.714h-2.669z"/></svg>`;
      case 'github':
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;
      case 'linkedin':
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;
      case 'email':
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
      default:
        return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }

  // 4. Render About & Bio
  function renderAbout(profile) {
    const bioContainer = document.getElementById('bio-container');
    if (bioContainer && profile.bio) {
      bioContainer.innerHTML = profile.bio
        .map(p => `<p class="bio-paragraph">${p}</p>`)
        .join('');
    }

    const tagsContainer = document.getElementById('research-tags');
    if (tagsContainer && profile.researchInterests) {
      tagsContainer.innerHTML = profile.researchInterests
        .map(t => `<span class="tag">${t}</span>`)
        .join('');
    }
  }

  // 5. Render News Feed
  function renderNews(news) {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer || !news) return;

    newsContainer.innerHTML = news
      .map(item => `
        <div class="news-item">
          <span class="news-date">${item.date}</span>
          <span class="news-badge">${item.tag}</span>
          <div class="news-text">${item.icon ? item.icon + ' ' : ''}${item.title}</div>
        </div>
      `)
      .join('');
  }

  // 6. Render Publications
  function renderPublications(pubs) {
    const pubContainer = document.getElementById('publications-container');
    if (!pubContainer || !pubs) return;

    pubContainer.innerHTML = pubs
      .map((pub, idx) => {
        const formattedAuthors = pub.authors
          .map(a => a.includes("Pietro Dardano") ? `<span class="author-me">${a}</span>` : a)
          .join(', ');

        const linkButtons = pub.links
          .map(l => `<a class="action-btn pub-link" href="${l.url}" target="_blank" rel="noopener" data-pub="${pub.id || idx}" data-link="${l.name}">↗ ${l.name}</a>`)
          .join('');

        const tagsHtml = pub.tags
          ? pub.tags.map(t => `<span class="tag">${t}</span>`).join('')
          : '';

        return `
          <article class="pub-card" id="pub-${pub.id || idx}">
            <h3 class="pub-title">${pub.title}</h3>
            <div class="pub-authors">${formattedAuthors}</div>
            <div class="pub-venue">${pub.venue} (${pub.year})</div>
            
            <div class="pub-actions">
              ${linkButtons}
              ${pub.abstract ? `<button class="action-btn" data-toggle="abstract" data-target="abs-${idx}" data-pub="${pub.id || idx}">Abstract</button>` : ''}
              ${pub.bibtex ? `<button class="action-btn" data-toggle="bibtex" data-target="bib-${idx}" data-pub="${pub.id || idx}">BibTeX</button>` : ''}
            </div>

            ${tagsHtml ? `<div class="tag-list" style="margin-top: 10px;">${tagsHtml}</div>` : ''}

            ${pub.abstract ? `
              <div class="pub-collapsible" id="abs-${idx}">
                <div class="pub-abstract-text">${pub.abstract}</div>
              </div>
            ` : ''}

            ${pub.bibtex ? `
              <div class="pub-collapsible" id="bib-${idx}">
                <div class="pub-bibtex-box">
                  <button class="copy-bibtex-btn" data-bib="${encodeURIComponent(pub.bibtex)}" data-pub="${pub.id || idx}">Copy</button>
                  <pre><code>${pub.bibtex}</code></pre>
                </div>
              </div>
            ` : ''}
          </article>
        `;
      })
      .join('');

    // Attach collapsible toggles
    pubContainer.querySelectorAll('button[data-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const toggleType = btn.getAttribute('data-toggle');
        const targetId = btn.getAttribute('data-target');
        const pubId = btn.getAttribute('data-pub') || targetId;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const isOpen = targetEl.classList.contains('open');
          targetEl.classList.toggle('open', !isOpen);
          btn.classList.toggle('active', !isOpen);
          if (!isOpen) {
            trackEvent('pub_toggle_' + toggleType, { paper: pubId });
          }
        }
      });
    });

    // Attach BibTeX copy
    pubContainer.querySelectorAll('.copy-bibtex-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rawBib = decodeURIComponent(btn.getAttribute('data-bib'));
        const pubId = btn.getAttribute('data-pub') || 'paper';
        navigator.clipboard.writeText(rawBib).then(() => {
          const oldText = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = oldText; }, 1800);
          trackEvent('copy_bibtex', { paper: pubId });
        });
      });
    });

    // Track paper external links (arXiv, PDF, Code, DOI)
    pubContainer.querySelectorAll('a.pub-link').forEach(link => {
      link.addEventListener('click', () => {
        trackEvent('paper_link_click', {
          paper: link.getAttribute('data-pub'),
          linkType: link.getAttribute('data-link')
        });
      });
    });
  }

  // 7. Render Projects
  function renderProjects(projects) {
    const projContainer = document.getElementById('projects-container');
    if (!projContainer || !projects) return;

    projContainer.innerHTML = projects
      .map(proj => {
        const linksHtml = proj.links && proj.links.length
          ? proj.links.map(l => `<a class="action-btn project-link" href="${l.url}" target="_blank" rel="noopener" data-proj="${proj.id}" data-link="${l.name}">↗ ${l.name}</a>`).join('')
          : '';

        const tagsHtml = proj.tags
          ? proj.tags.map(t => `<span class="tag">${t}</span>`).join('')
          : '';

        const videoHtml = proj.video
          ? `<div class="project-media" style="margin-top: 12px; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden;">
              <iframe width="100%" height="315" src="${proj.video}" frameborder="0" allowfullscreen></iframe>
            </div>`
          : '';

        return `
          <div class="project-card">
            <div class="project-header">
              <h3 class="project-title">${proj.title}</h3>
              <span class="project-period">${proj.period}</span>
            </div>
            <div class="project-summary">${proj.summary}</div>
            <div class="project-desc">${proj.description}</div>
            ${videoHtml}
            <div class="project-footer">
              <div class="tag-list" style="margin: 0;">${tagsHtml}</div>
              <div class="project-links">${linksHtml}</div>
            </div>
          </div>
        `;
      })
      .join('');

    // Track project links
    projContainer.querySelectorAll('a.project-link').forEach(link => {
      link.addEventListener('click', () => {
        trackEvent('project_link_click', {
          project: link.getAttribute('data-proj'),
          link: link.getAttribute('data-link')
        });
      });
    });
  }

  // 8. Render Experience & Education
  function renderExperience(expList, eduList) {
    const expContainer = document.getElementById('experience-container');
    if (expContainer && expList) {
      expContainer.innerHTML = expList
        .map(e => `
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-role">${e.role}</div>
            <div class="timeline-org">${e.organization} · <span style="font-weight: 400; color: var(--text-muted);">${e.location}</span></div>
            <div class="timeline-period">${e.period}</div>
            <div class="timeline-details">${e.details}</div>
          </div>
        `)
        .join('');
    }

    const eduContainer = document.getElementById('education-container');
    if (eduContainer && eduList) {
      eduContainer.innerHTML = eduList
        .map(ed => `
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-role">${ed.degree}</div>
            <div class="timeline-org">${ed.institution}</div>
            <div class="timeline-period">${ed.period}</div>
            <div class="timeline-details">${ed.details}</div>
          </div>
        `)
        .join('');
    }
  }

  // 9. Research Chat Assistant Modal
  function initChat(chatConfig) {
    const modalOverlay = document.getElementById('chat-modal-overlay');
    const toggleBtn = document.getElementById('chat-toggle-btn');
    if (!toggleBtn || !chatConfig || !chatConfig.enabled) {
      if (toggleBtn) toggleBtn.style.display = 'none';
      if (modalOverlay) modalOverlay.style.display = 'none';
      return;
    }

    const drawer = document.getElementById('chat-drawer');
    const closeBtn = document.getElementById('chat-close-btn');
    const messagesEl = document.getElementById('chat-messages');
    const promptsEl = document.getElementById('chat-prompts');
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send-btn');
    const titleEl = document.getElementById('chat-title');
    const badgeEl = document.getElementById('chat-badge');
    const linksEl = document.getElementById('chat-header-links');

    if (titleEl && chatConfig.title) titleEl.textContent = chatConfig.title;
    if (badgeEl && chatConfig.badge) badgeEl.textContent = chatConfig.badge;
    if (linksEl) {
      linksEl.innerHTML = [
        chatConfig.hostUrl && chatConfig.hostLabel ? `<a href="${chatConfig.hostUrl}" target="_blank" rel="noopener">${chatConfig.hostLabel}</a>` : '',
        chatConfig.trackingUrl && chatConfig.trackingLabel ? `<a href="${chatConfig.trackingUrl}" target="_blank" rel="noopener">${chatConfig.trackingLabel}</a>` : ''
      ].filter(Boolean).join('<span aria-hidden="true"> · </span>');
    }

    const conversation = [];

    function appendMsg(role, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `chat-msg ${role}`;
      msgDiv.textContent = text;
      messagesEl.appendChild(msgDiv);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return msgDiv;
    }

    if (chatConfig.initialGreeting) {
      appendMsg('assistant', chatConfig.initialGreeting);
    }

    if (promptsEl && chatConfig.suggestedPrompts) {
      promptsEl.innerHTML = chatConfig.suggestedPrompts
        .map(p => `<button type="button" class="prompt-chip" data-prompt="${p}">💡 ${p}</button>`)
        .join('');

      promptsEl.querySelectorAll('.prompt-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const prompt = chip.getAttribute('data-prompt');
          input.value = prompt;
          handleSend();
        });
      });
    }

    function openModal() {
      if (modalOverlay) {
        modalOverlay.classList.add('open');
        input.focus();
        trackEvent('open_chat_assistant');
      }
    }

    function closeModal() {
      if (modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    }

    toggleBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });

    async function handleSend() {
      const text = input.value.trim();
      if (!text) return;

      appendMsg('user', text);
      conversation.push({ role: 'user', content: text });
      input.value = '';
      sendBtn.disabled = true;

      // Track query in Umami Analytics so Pietro can review what visitors ask
      trackEvent('chat_query', { question: text });

      const loadingMsg = appendMsg('assistant loading', 'Consulting research profile...');

      try {
        const res = await fetch(chatConfig.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: conversation })
        });

        const data = await res.json();
        loadingMsg.remove();

        if (data.choices && data.choices[0] && data.choices[0].message) {
          const msg = data.choices[0].message;
          let reply = msg.content;
          
          // If content is empty but model provided reasoning, extract actual final answer
          if (!reply && msg.reasoning) {
            const match = msg.reasoning.match(/(?:Draft|Response|Answer|Conclusion):\s*([^\n][\s\S]*)$/i);
            if (match) {
              reply = match[1].trim();
            } else {
              // Fallback to taking the last sentence/paragraph of reasoning
              const lines = msg.reasoning.trim().split('\n').filter(Boolean);
              reply = lines[lines.length - 1];
            }
          }

          if (!reply) {
            reply = "I couldn't generate a clear answer to that. Please try rephrasing your question.";
          }

          // Strip any residual thought tags
          reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, '')
                       .replace(/<thought>[\s\S]*?<\/thought>/gi, '')
                       .trim();

          appendMsg('assistant', reply);
          conversation.push({ role: 'assistant', content: reply });
        } else if (data.error) {
          appendMsg('assistant', `⚠️ ${data.error.message || 'Service temporarily busy. Please try again in a moment.'}`);
        } else {
          appendMsg('assistant', 'Sorry, I could not process your question at the moment.');
        }
      } catch (err) {
        loadingMsg.remove();
        appendMsg('assistant', 'Network error connecting to research assistant. Please try again.');
      } finally {
        sendBtn.disabled = false;
        input.focus();
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSend();
    });
  }

  // 10. Initialize Everything
  window.addEventListener('DOMContentLoaded', () => {
    if (!window.SITE_DATA) {
      console.error('SITE_DATA is missing or not loaded.');
      return;
    }

    const data = window.SITE_DATA;
    if (data.analytics) {
      initAnalytics(data.analytics);
    }

    renderProfile(data.profile);
    renderAbout(data.profile);
    renderNews(data.news);
    renderPublications(data.publications);
    renderProjects(data.projects);
    renderExperience(data.experience, data.education);

    if (data.chat) {
      initChat(data.chat);
    }

    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
