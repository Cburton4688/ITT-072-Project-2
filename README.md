# Project 1 — Web Scripting 2 Portfolio Starter

A Vite-powered intro app for Web Scripting 2. Built with vanilla JavaScript, ES modules, and custom CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Project structure

```
project-1-vite-starter/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
├── public/
└── src/
    ├── main.js       # entry point, wires everything up
    ├── data.js       # exported content (about, goals, skills, projects)
    ├── render.js     # functions that build DOM from data
    └── style.css     # all styles
```

## Features

- Custom homepage replacing the Vite default
- 4 content sections: About, Goals, Skills, Projects
- Two additional JS modules (`data.js`, `render.js`) using `import`/`export`
- Dynamic rendering — all list and card content is built with JavaScript
- Current year in footer via `new Date().getFullYear()`
- Custom CSS with dark theme, responsive layout

## Deployment

Deployed via GitHub Pages at: _[add your URL here]_
