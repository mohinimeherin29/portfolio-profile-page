# Personal Profile Page

A responsive personal profile page built with plain HTML, CSS and JavaScript, with no frameworks or libraries. It introduces me, lists the university units I've completed, and has an image gallery, an embedded video and a dark mode that remembers your choice.

**Live demo:** _add your GitHub Pages link here_

## Features

- **Three-column layout** built with CSS Grid, showing the units table, images and video side by side
- **Dark mode toggle** that switches the whole page between light and dark themes and saves your preference in `localStorage`, so it stays the same after a refresh
- **Image swap** button that switches between a local and a remote image without reloading the page
- **Units table** with a styled header and alternating row colours
- **Media section** with images in `<figure>` elements and an embedded HTML5 `<video>`
- **Semantic HTML** using `<header>`, `<main>`, `<section>` and `<footer>`

## Built with

- HTML5
- CSS3 (Grid, custom classes for theming)
- JavaScript (DOM manipulation, `classList`, `localStorage`)

## Project structure

```
├── index.html   # Page content and structure
├── style.css    # Layout, typography, table styling and dark mode theme
├── script.js    # Dark mode toggle and image swap logic
└── photo.jpeg   # Local profile image
```

## How it works

**Dark mode:** clicking the button toggles a `dark-mode` class on `<body>` with `document.body.classList.toggle()`. The button label updates to match the current mode, and the choice is saved in `localStorage` and restored when the page loads.

**Image swap:** the script checks which image is showing (`src.includes("photo.jpeg")`) and swaps it with the other one, so each click switches back and forth.

## Run it locally

```bash
git clone https://github.com/<your-username>/portfolio-profile-page.git
cd portfolio-profile-page
```

Then open `index.html` in your browser. No build step is needed.

## Credits

- Remote image from [Wikimedia Commons](https://commons.wikimedia.org/)
- Sample video from [MDN Web Docs](https://developer.mozilla.org/)

## Author

**Mohini Meherin**: [GitHub](https://github.com/mohinimeherin)
