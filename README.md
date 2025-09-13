# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<!--  -->

Quick Start (Run locally)

Prerequisites

Node.js (v16+) and npm installed.

Clone the repo

git clone <your-repo-url>
cd <project-folder>


Install dependencies

npm install


Run development server

npm run dev


Open http://localhost:5173 (or address shown in terminal).

Build for production

npm run build
npm run preview

<!--  -->

Project journey :

Initialize project

npm create vite@latest → choose project name → choose react + javascript.

Install dependencies

npm install

Installed packages: react-router-dom, react-icons, tailwindcss (and its setup packages).

Setup Tailwind CSS

npm install tailwindcss @tailwindcss/vite

Tailwind directives to index.css.

Create basic layout

Built Navbar, Footer, and a Layout with Outlet (React Router) so different pages render inside the common layout.

Create components

DisplayBooks.jsx — main page for searching and showing books

Favorite.jsx — shows the list of favorite books

Loading.jsx — small loader component

Footer.jsx — page footer

Navbar.jsx — top navigation + search bar

Implement search

Call Open Library Search API (/search.json?title=...)

Debounce input (500ms) to avoid too many calls

Display first 30 results for better performance

Favorites

Favorites state kept in App.jsx and shared with children via Outlet context

Click heart icon to toggle favorite (add/remove)

Styling & responsiveness

Tailwind utilities used to make responsive cards, grids, and mobile-friendly UI.