# Talk with Steph — Website Guide

## About this website

This is your personal website for your coaching practice, Talk with Steph. It has four pages:

- **Home** — your first impression, with a hero headline, pull quote, and a call to action
- **About** — your story, your coaching philosophy, and how you work
- **Work with Me** — your free discovery call offer, your coaching services, and an FAQ
- **Contact** — a contact form and your direct booking link

The site is built with standard HTML and CSS files. You do not need to log into any platform to edit it — you just open the files, make your changes, and save. Everything is designed to be updated by you without needing a developer for day-to-day edits.

---

## File structure

```
talkwithsteph/
│
├── index.html
├── about.html
├── work-with-me.html
├── contact.html
├── style.css
├── config.js
├── CNAME
├── .gitignore
└── README.md
│
└── assets/
    └── images/
        ├── steph-hero.jpg
        └── steph-with-benji.jpg
```

| File / Folder | What it is |
|------|------------|
| `index.html` | Your home page |
| `about.html` | Your About page |
| `work-with-me.html` | Your Work with Me page |
| `contact.html` | Your Contact page |
| `style.css` | Controls colors, fonts, and spacing across all pages |
| `config.js` | **The most important file for updates — your links live here** |
| `CNAME` | Created automatically by GitHub — do not delete this |
| `.gitignore` | Tells GitHub to ignore junk files like .DS_Store |
| `assets/images/` | All photos for the site |
| `README.md` | This guide |

---

## How to edit your website

1. Open the file you want to edit in a plain text editor.
   - On a Mac: use **TextEdit** (make sure it's in plain text mode: Format → Make Plain Text)
   - On a PC: use **Notepad**
   - Even better: download the free app **Visual Studio Code** at code.visualstudio.com — it color-codes everything and makes editing much easier
2. Use **Edit → Find** (or Cmd+F / Ctrl+F) to search for the text you want to change
3. Make your edit, save the file, and open it in your browser to check it before pushing to GitHub

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

**Hero headline (home page):** search for `You love your life.`

**Pull quote (home page):** search for `I just feel stuck.`

**About page intro:** open `about.html` and search for `Hi, I'm Steph.`

---

## How to update your photos

Photos live in `assets/images/`. There are currently two:

- `steph-hero.jpg` — the main photo on the home page
- `steph-with-benji.jpg` — the photo on the About page

To swap either photo, save your new image as a `.jpg`, give it the same filename as the one you're replacing, and drop it into `assets/images/`. Push to GitHub and it will update automatically.

---

## Your brand colors

| Color name | Hex code | Used for |
|------------|----------|----------|
| Warm Linen | `#F5F0E8` | Main background |
| Terracotta | `#C45A2A` | Buttons, highlights |
| Dusty Sage | `#5A7A5C` | Accents, labels |
| Near Black | `#1E1E1A` | Nav, footer |
| Dark Brown | `#2E2A22` | Pull quote background |
| Body Text  | `#3A3A30` | Paragraph text |

---

## How the contact form works

**Status: not yet connected — needs to be set up using Google Forms.**

The plan is to replace the current contact form with a **Google Form** connected to your Google Workspace account. This keeps your email address completely out of the public repository while still delivering submissions to `hello@talkwithsteph.co`.

**How it works:**
- Someone fills out the form on the contact page
- Google saves every submission to a Google Sheet in your Drive
- You get an email notification at `hello@talkwithsteph.co` for every new submission
- No code, no API keys, nothing sensitive in the repo

**Step 1 — Create the Google Form**

1. Go to forms.google.com signed into your Google Workspace account
2. Create a new form with three fields: **Name** (short answer), **Email** (short answer), **Message** (paragraph)
3. Give it a title like "Talk with Steph — Contact"
4. Click the **Responses** tab and click the Google Sheets icon to create a connected spreadsheet — all submissions will appear there automatically

**Step 2 — Set up email notifications**

1. Still in the Responses tab, click the three-dot menu
2. Select **Get email notifications for new responses**
3. Make sure you are signed in as `hello@talkwithsteph.co` so notifications go to the right inbox

**Step 3 — Add it to the contact page**

1. Click **Send** at the top right of the form
2. Click the **embed icon** (`< >`) to get an iframe code, or the **link icon** to get a shareable URL
3. **To embed:** copy the iframe code, open `contact.html`, find the `<form>` block, and replace the entire form with the iframe
4. **To link out:** replace the form with a button that opens the Google Form in a new tab — cleaner visually since there is no Google styling clash

**Embed vs link:** embedding keeps visitors on the page but the form will have Google's default styling. Linking out avoids that clash. Either works — choose based on preference.

---

## Going live with your Wix domain

**Status: DNS has been updated in Wix — waiting for propagation to complete.**

GitHub Pages is already turned on and the site is live at the `github.io` URL. The Wix domain has been pointed to GitHub using four A records. DNS propagation can take up to 24 hours — once it completes, `talkwithsteph.co` will load the site automatically.

**What was done:**

1. GitHub Pages was enabled in the repo Settings → Pages
2. The custom domain `talkwithsteph.co` was added in GitHub Pages settings — this created the `CNAME` file in the repo automatically
3. The existing Wix A records (which pointed to Wix's servers) were deleted from the Wix DNS settings
4. Four new A records were added in Wix pointing to GitHub's servers:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
5. A CNAME record was added for `www` pointing to `swearingenmj.github.io`

**To confirm it worked:** go to GitHub → Settings → Pages and look for a green checkmark next to `talkwithsteph.co`. Once the padlock (SSL) is active, tick the **Enforce HTTPS** checkbox.

**Note on the CNAME file:** GitHub created this file automatically when the custom domain was added. Do not delete it — it is what tells GitHub which domain this site belongs to.

---

## Things to do

- [x] Photos added — `steph-hero.jpg` and `steph-with-benji.jpg` are live
- [x] Linktree link updated in `config.js`
- [x] GitHub Pages turned on
- [x] Wix DNS updated with GitHub A records — waiting on propagation
- [x] Once DNS propagates, enable **Enforce HTTPS** in GitHub Pages settings
- [ ] Set up Google Form and connect it to the contact page (see instructions above)

---

## Questions?

Bring this entire folder and this README to any web developer — everything is clearly organized and labeled and they will be able to help quickly.