# AGENTS.md — Website Governance & Maintenance Guide

This document governs how AI coding assistants and developers interact with, maintain, and update **Pietro Dardano's personal academic website** (`pietrodardano.github.io`).

---

## 1. Architectural Philosophy & Principles

1. **YAGNI (You Aren't Gonna Need It)**:
   - Keep the codebase simple, fast, and minimal.
   - Limit lines of code. Do not introduce build tools, package managers, Node modules, Hugo templates, bundlers, or CSS frameworks (no Tailwind, Bootstrap, or React).
   - The site runs directly in any modern browser via pure Vanilla HTML5, CSS3, and JavaScript.
2. **Centralized Data Store**:
   - Almost all content changes (news, publications, projects, bio, links) are made strictly in [`site-data.js`](file:///Users/Q682676/Documents/pietrodardano.github.io/site-data.js).
   - Avoid hardcoding dynamic content into `index.html`.
3. **Modernist Scientific Aesthetic**:
   - Clean, squared-ish design with subtle rounded corners (border-radius: `var(--radius)` ~`8px`).
   - Clean 1px borders, crisp typography (system sans-serif + monospace accents for metadata/tags).
   - Fully accessible Light & Dark mode support.

---

## 2. Directory Structure

```text
pietrodardano.github.io/
├── index.html            # Semantic HTML5 shell
├── style.css             # Vanilla CSS design system (< 300 lines)
├── site-data.js          # Single source of truth for all data & content
├── main.js               # Minimalist rendering engine & theme controller (< 150 lines)
├── assets/
│   ├── avatar.jpg        # Profile photo
│   └── resume.pdf        # Curriculum Vitae PDF
├── .github/workflows/
│   └── publish.yaml      # Fast 15s GitHub Pages static deployer
├── _archive_hugoblox/    # Archived legacy Hugo site (DO NOT MODIFY OR DELETE)
└── AGENTS.md             # This governance document
```

---

## 3. How to Perform Updates

### 3.1 Adding a News / Timeline Item
Open [`site-data.js`](file:///Users/Q682676/Documents/pietrodardano.github.io/site-data.js) and prepend an object to the `news` array:
```javascript
{
  date: "2026-07",                      // YYYY-MM format
  tag: "Conference",                    // Short badge tag: "Paper", "Award", "Talk", "Milestone"
  icon: "🎤",                          // Contextual emoji
  title: "Presented our work at ..."   // Clear description of the update
},
```

### 3.2 Adding a Publication
Open [`site-data.js`](file:///Users/Q682676/Documents/pietrodardano.github.io/site-data.js) and prepend an object to the `publications` array:
```javascript
{
  id: "author2026topic",
  title: "Paper Title Goes Here",
  authors: ["Pietro Dardano", "Co-Author Name"], // Exactly "Pietro Dardano" to trigger auto-highlighting
  venue: "Conference or Journal Name (e.g. IEEE ICRA, IROS, IAS)",
  year: 2026,
  date: "2026-05-20",
  tags: ["Robotics", "Perception", "Learning"],
  abstract: "Brief summary of the paper contributions...",
  links: [
    { name: "arXiv", url: "https://arxiv.org/abs/..." },
    { name: "PDF", url: "https://arxiv.org/pdf/..." },
    { name: "Code", url: "https://github.com/..." },
    { name: "DOI", url: "https://doi.org/..." },
    { name: "Video", url: "https://youtube.com/..." }
  ],
  bibtex: `@inproceedings{dardano2026paper,
  title={Paper Title Goes Here},
  author={Dardano, Pietro and Others},
  booktitle={Conference},
  year={2026}
}`
}
```

### 3.3 Adding a Project or Robotics Video Demo
Open [`site-data.js`](file:///Users/Q682676/Documents/pietrodardano.github.io/site-data.js) and add to the `projects` array:
```javascript
{
  id: "project-slug",
  title: "Project Name",
  summary: "One-sentence high-level summary.",
  description: "Detailed description of algorithms, robotics hardware, ROS packages, or experimental findings.",
  period: "2025 - Present",
  tags: ["ROS 2", "Sim2Real", "IsaacSim"],
  links: [
    { name: "Code Repository", url: "https://github.com/..." }
  ],
  video: "https://www.youtube.com/embed/VIDEO_ID" // or null if no video
}
```

### 3.4 Updating Resume or Avatar
- To update the CV: replace [`assets/resume.pdf`](file:///Users/Q682676/Documents/pietrodardano.github.io/assets/resume.pdf).
- To update the photo: replace [`assets/avatar.jpg`](file:///Users/Q682676/Documents/pietrodardano.github.io/assets/avatar.jpg).

### 3.5 Private Analytics & Telemetry (Umami Cloud)
- Privacy-first, zero-cookie analytics.
- Dashboard is strictly private at `https://cloud.umami.is/` behind personal authentication.
- To enable or update the tracker, edit `analytics.umamiWebsiteId` in [`site-data.js`](file:///Users/Q682676/Documents/pietrodardano.github.io/site-data.js). The website ID is a write-only public identifier that allows sending pings but grants zero read permissions.
- Telemetry events tracked automatically in `main.js`: `cv_download`, `copy_bibtex`, `paper_link_click`, `project_link_click`, `social_link_click`, `toggle_theme`.

### 3.6 Research AI Chat Assistant (OpenRouter + Cloudflare Worker)
- Interactive grounded assistant for Pietro's academic profile, grounded on supervisors and research themes:
  - Mohsen Kaboli (BMW & TU/e): Tactile sensing, multi-modal perception, robotic manipulation, cognitive vehicles.
  - Andrea Del Prete (Uni-Trento): Reinforcement learning, Sim2Real on quadrupeds (Unitree AlienGo), DDPG/TD3 safety value functions.
  - Paolo Rocco (PoliMi): Robot control, cobots, force control, avionics testing with XAI.
- Securely decoupled: The OpenRouter secret API key is stored only inside the private Cloudflare Worker (`pietro-ai.dardanopietro.workers.dev`).
- Front-end config: `chat.enabled` and `chat.endpoint` in [`site-data.js`](file:///Users/Q682676/Documents/pietrodardano.github.io/site-data.js).

---

## 4. Design & Code Constraints

- **Do NOT add bulky icon fonts** (FontAwesome, Material Icons, etc.). Use the built-in SVG helper in `main.js`.
- **Do NOT remove or alter `_archive_hugoblox/`**. That folder preserves the historical Hugo site for reference.
- **Maintain CSS variables**: Always reference `--bg`, `--surface`, `--border`, `--text`, `--accent` in `style.css` so dark mode functions seamlessly.
- **Test locally**: Any agent modifying `site-data.js` or `style.css` must verify layout rendering across light and dark modes before submitting changes.
