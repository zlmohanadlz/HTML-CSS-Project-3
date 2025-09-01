# HTML & CSS Project 3

**Live Demo:** https://zlmohanadlz.github.io/HTML-CSS-Project-3

A responsive, multi‑section website built with semantic **HTML5**, modern **CSS3**, and a small amount of **vanilla JavaScript** for interactivity. This project is ideal as a learning resource, a starter template, or the base of a personal portfolio.

---

## Table of Contents

-   [Overview](#overview)
-   [Key Features](#key-features)
-   [Preview (Sections)](#preview-sections)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
-   [Configuration & Customization](#configuration--customization)
    -   [Theme & Styles](#theme--styles)
    -   [JavaScript Behavior](#javascript-behavior)
-   [Accessibility Notes](#accessibility-notes)
-   [Performance Tips](#performance-tips)
-   [Deployment (GitHub Pages)](#deployment-github-pages)
-   [Contributing](#contributing)
-   [License](#license)
-   [Credits](#credits)

---

## Overview

This repository contains a complete, responsive landing site composed of multiple UI sections (Articles, Gallery, Features, Testimonials, Team, Services, Skills, How It Works, Events, Pricing, Top Videos, Stats, Discount/Contact, and Footer). The layout emphasizes clean typography, spacing, and reusable components.

Use this project to:

-   practice semantic HTML and modern CSS techniques (Flexbox, Grid, variables, transitions)
-   understand how to organize static assets (images, webfonts)
-   add small interactive behaviors with vanilla JavaScript

**Live Demo:** https://zlmohanadlz.github.io/HTML-CSS-Project-3

---

## Key Features

-   **Modern, clean design** with consistent spacing and visual hierarchy.
-   **Responsive layout** (mobile → tablet → desktop) using Flexbox and Grid.
-   **Reusable components** (cards, media blocks, pricing cards, testimonials, stats, etc.).
-   **Light JavaScript enhancements** (e.g., event countdown, simple UI toggles).
-   **Easy to customize** colors, fonts, and section content.

---

## Preview (Sections)

The site includes the following sections out of the box:

-   **Hero / Welcome** – Intro headline and brief description.
-   **Articles** – Card list with images, titles, and teaser text.
-   **Gallery** – Image grid.
-   **Features** – Highlighted features with iconography.
-   **Testimonials** – Avatar, name, role, and quote.
-   **Team Members** – Team grid with names and brief bios.
-   **Services** – Service cards with links/details.
-   **Our Skills** – Skill labels with percentages.
-   **How It Works** – Process/steps with illustration.
-   **Latest Events** – Title, description, and a **countdown timer**.
-   **Pricing Plans** – Three‑tier pricing cards (Basic / Advanced / Professional).
-   **Top Videos** – List of videos with durations and featured preview.
-   **Stats** – Counters for achievements/metrics.
-   **Discount & Contact** – Offer text and a request form.
-   **Footer** – Links, location, business hours, and contact info.

---

## Tech Stack

-   **HTML5** – Semantic structure.
-   **CSS3** – Variables, Flexbox, Grid, media queries, transitions/animations.
-   **JavaScript (vanilla)** – Minimal interactivity in `/JS/main.js`.

---

## Project Structure

```
HTML-CSS-Project-3/
├─ Css/                 # Stylesheets (global styles, components, utilities)
├─ JS/
│  └─ main.js           # Small JS behaviors (e.g., event countdown, simple UI toggles)
├─ images/              # Image assets used across sections
├─ webfonts/            # Local web fonts (if any)
├─ index.html           # Entry point
└─ README.md            # This documentation
```

> **Note:** Folder names are case‑sensitive on many systems (e.g., `Css/`, `JS/`).

---

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/zlmohanadlz/HTML-CSS-Project-3.git
cd HTML-CSS-Project-3
```

### 2) Open locally

Just open `index.html` in your browser.

**Optional (local server):**

```bash
# using Node.js http-server
npx http-server . -p 8080
# then visit http://localhost:8080
```

No build tools are required.

---

## Usage

-   Edit content directly in **`index.html`** (section titles, texts, lists, images).
-   Replace images in **`/images`** with your own (keep filenames or update references in HTML/CSS).
-   Adjust styles in **`/Css`** (colors, spacing, typography, breakpoints).
-   Tweak interactive behavior in **`/JS/main.js`** (see below).

---

## Configuration & Customization

### Theme & Styles

Common customizations are done in the main stylesheet(s) inside `Css/`:

-   **Colors** – via CSS variables (e.g., in `:root { --primary: ... }`).
-   **Typography** – font families, sizes, weights, and line heights.
-   **Spacing** – margins, paddings, gaps; consider using a consistent scale.
-   **Breakpoints** – media queries that adapt layout for tablet/desktop.
-   **Components** – cards, buttons, lists, feature blocks, pricing cards, etc.

> Tip: If you introduce new colors or spacing values, add them as variables for consistency.

### JavaScript Behavior

The project uses a minimal `JS/main.js`. Typical behaviors include:

1. **Event Countdown (Latest Events section)**

    - The script calculates remaining **days/hours/minutes/seconds** until a target date and updates the UI periodically.
    - To change the target:
        ```js
        // JS/main.js
        // Example: set a specific UTC moment (ISO format is safest)
        const targetDate = new Date("2026-12-31T23:59:59Z");
        //           or: new Date(Date.UTC(2026, 11, 31, 23, 59, 59)); // months are 0‑based
        ```
    - If you want to use a _local time_ instead of UTC, omit the `Z` and provide a local ISO string:
        ```js
        // Interpreted in the browser's local timezone
        const targetDate = new Date("2026-12-31T23:59:59");
        ```
    - Make sure your UI elements (e.g., `#days`, `#hours`, `#minutes`, `#seconds`) match the selectors in `main.js`.

2. **Simple UI Toggles (if present)**
    - Example patterns you might see in `main.js`:
        - Show/hide a menu or dropdown when an icon is clicked.
        - Close the menu when clicking outside (using event delegation & `stopPropagation()`).
        - Smooth scroll to sections when nav links are clicked.
    - Keep selectors (`.menu-toggle`, `.nav`, etc.) in sync with your HTML.

> If you add new interactive features, keep them modular and documented with comments in `main.js`.

---

## Accessibility Notes

-   Use **semantic elements** (`header`, `nav`, `main`, `section`, `footer`).
-   Ensure **sufficient color contrast** between text and backgrounds.
-   Provide **`alt` text** for informative images.
-   Maintain a **logical heading order** (H1 → H2 → H3 …).
-   Make interactive controls **keyboard accessible** and visible on focus.

---

## Performance Tips

-   **Optimize images** (compress, use appropriate dimensions and formats).
-   **Preload key fonts** and define font‑display behavior (e.g., `swap`).
-   **Minify** CSS/JS for production (optional for small projects).
-   **Defer** non‑critical JS or place `<script>` tags at the end of `body`.

---

## Deployment (GitHub Pages)

This repository is configured to serve a static site.

1. Push changes to your default branch (usually `main`).
2. In the repo, open **Settings → Pages**.
3. Choose **Branch: `main`** and **Folder: `/ (root)`**.
4. Save – your site will be available at `https://<username>.github.io/<repo>`.

If already enabled, your live site is here:

-   https://zlmohanadlz.github.io/HTML-CSS-Project-3

---

## Contributing

Contributions, issues, and feature requests are welcome.

**Workflow**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow conventional commit messages when possible (e.g., `feat:`, `fix:`, `docs:`, `style:`, `refactor:`).

---

## License

No explicit license file is present in this repository at the time of writing. If you intend to open‑source this project, consider adding an OSI‑approved license (e.g., **MIT**). You can create a `LICENSE` file and update this section accordingly.

---

## Credits

-   **Author:** Mohanad ([@zlmohanadlz](https://github.com/zlmohanadlz))
-   **Assets:** Images and webfonts under `/images` and `/webfonts` are included for demo purposes. Replace them with your own or ensure you have rights to use them.

If you use this template, a link back is appreciated but not required. Happy building! 🚀
