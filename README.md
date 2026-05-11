# Talk with Steph — Website Guide

## About this website

This is your personal website for your coaching practice, Talk with Steph. It has three pages:

- **Home** — your first impression, with a hero headline, pull quote, and a call to action
- **About** — your story, your coaching philosophy, and how you work
- **Work with Me** — your free discovery call offer and your coaching services

The site is built with standard HTML and CSS files. You do not need to log into any platform to edit it — you just open the files, make your changes, and save. Everything is designed to be updated by you without needing a developer for day-to-day edits.

---

## File structure

```
talkwithsteph/
│
├── index.html
├── about.html
├── work-with-me.html
├── styles.css
├── config.js
├── nav.js
├── CNAME
├── .gitignore
└── README.md
│
└── assets/
    └── images/
        ├── steph.jpg
        └── steph-dino.JPG
```

| File / Folder | What it is |
|------|------------|
| `index.html` | Your home page |
| `about.html` | Your About page |
| `work-with-me.html` | Your Work with Me page |
| `styles.css` | Controls colors, fonts, and spacing across all pages |
| `config.js` | **The most important file for updates — your links live here** |
| `nav.js` | Controls the mobile navigation menu — do not edit |
| `CNAME` | Created automatically by GitHub — do not delete this |
| `.gitignore` | Tells GitHub to ignore junk files like .DS_Store |
| `assets/images/` | All photos for the site |
| `README.md` | This guide |

---

## How to edit your website

1. Go to the repository on GitHub and click the file you want to edit
2. Click the **pencil icon** (Edit this file) in the top right corner of the file view
3. Use **Ctrl+F** to search for the text you want to change
4. Make your edit
5. When you're done, scroll down to the **Commit changes** button, add a short note about what you changed, and click **Commit changes**

The site will update automatically within a minute or two. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R) if you don't see the change right away.

---

## How to update your booking link or Instagram

Your booking link and Instagram link are stored in **one file only**: `config.js`.

Open `config.js` and you will see this at the top:

```javascript
const SITE_CONFIG = {
  bookingLink: "https://cal.com/steph-straub/45min",
  instagramLink: "https://www.instagram.com/talkwithsteph.co",
  instagramHandle: "@talkwithsteph.co",
  linktreeLink: "https://linktr.ee/talkwithsteph",
};
```

Replace the address inside the quotes and save. The change applies across every page automatically.

---

## How to update your text

Open the relevant HTML file, use Cmd+F / Ctrl+F to search for the words you want to change, replace them, and save.

---

## How to update your photos

Photos live in `assets/images/`. There are currently two:

- `steph.jpg` — the main photo on the home page hero
- `steph-dino.JPG` — the photo on the About page

To swap either photo, save your new image with the same filename as the one you're replacing and drop it into `assets/images/`. Push to GitHub and it will update automatically.

**Note on filenames:** the filenames are case-sensitive on GitHub Pages. If your new file has a different extension or capitalization (e.g. `.jpg` vs `.JPG`), update the `src` in the relevant HTML file to match exactly.

---

## Your brand colors

| Color name | Hex code | Used for |
|------------|----------|----------|
| Mist | `#EDF2F2` | Main background |
| Pale Teal | `#D6E5E5` | Alternate section backgrounds |
| Mid Teal | `#BACFCF` | Card sections, quote band |
| Primary Teal | `#3D7070` | Buttons, accents, eyebrow labels |
| Deep Teal | `#2A5050` | Dark buttons, section backgrounds |
| Near Black | `#1A3333` | Headlines, footer background |
| Body Text | `#2A4444` | Paragraph text |
| Muted Text | `#4A6A6A` | Nav links, secondary text |

---

## Your fonts

| Font | Style | Used for |
|------|-------|----------|
| **Lora** | Serif | Headlines, pull quotes, recognition lines |
| **Jost** | Sans-serif | Body text, nav, buttons, eyebrow labels |

Both fonts are loaded from Google Fonts and require an internet connection to display correctly.

---

## Questions?

Bring this entire folder and this README to any web developer — everything is clearly organized and labeled and they will be able to help quickly.
