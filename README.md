# Talk with Steph — Website Guide

## About this website

This is your personal website for your coaching practice, Talk with Steph. It has five pages:

- **Home** — your first impression, with a hero headline, pull quote, blog preview, and a call to action
- **About** — your story, your coaching philosophy, and how you work
- **Work with Me** — your free discovery call offer, your coaching services, and an FAQ
- **Blog** — a grid of your writing with a newsletter signup
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
├── blog.html
├── contact.html
├── style.css
├── config.js
├── README.md
│
├── assets/
│   └── images/
│       ├── steph-hero.jpg
│       ├── steph-about.jpg
│       └── blog/
│           ├── post-identity.jpg
│           ├── post-decisions.jpg
│           └── post-communication.jpg
│
└── posts/
    ├── what-does-it-mean-to-lose-yourself.html
    ├── why-you-cant-decide-what-you-want.html
    └── the-conversations-you-keep-avoiding.html
```

| File / Folder | What it is |
|------|------------|
| `index.html` | Your home page |
| `about.html` | Your About page |
| `work-with-me.html` | Your Work with Me page |
| `blog.html` | Your blog index — shows all post cards |
| `contact.html` | Your Contact page |
| `style.css` | Controls colors, fonts, and spacing across all pages |
| `config.js` | **The most important file for updates — your links live here** |
| `assets/images/` | All photos and images |
| `assets/images/blog/` | Images for individual blog posts |
| `posts/` | Each blog post as its own HTML file |
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

## How to add your photo

Save your photo as a `.jpg`, name it clearly (e.g. `steph-hero.jpg`), and put it in `assets/images/`.

Then open the HTML file where the photo should appear, search for `photo-placeholder`, and replace:
```html
<div class="photo-placeholder"></div>
```
with:
```html
<img src="assets/images/steph-hero.jpg" alt="Photo of Steph" style="width:100%; height:100%; object-fit:cover;" />
```

Use `steph-about.jpg` for the about page and `steph-hero.jpg` for the home page.

---

## How to write and publish a blog post

Each blog post lives as its own file in the `posts/` folder. This keeps your writing separate from the site structure and makes each post its own shareable, linkable page.

**Step 1 — Create the post file**

Copy any existing file in the `posts/` folder and rename it to match your new post, using hyphens instead of spaces:
```
posts/everything-is-fine-so-why-do-i-feel-off.html
```

**Step 2 — Write your post**

Open the file and update the title, date, category tag, and body content. The template is already styled to match the rest of your site.

**Step 3 — Add a card to the blog index**

Open `blog.html` and find an existing blog card. Copy the whole block, paste it at the top of the grid, and update the title, excerpt, date, reading time, and link:

```html
<div class="blog-card">
  <div class="blog-card-img img-sage"></div>
  <div class="blog-card-body">
    <div class="post-tag">On identity</div>
    <div class="post-title">Your post title here</div>
    <div class="post-excerpt">A short summary of your post...</div>
    <div class="post-meta">Month Year &nbsp;·&nbsp; X min read</div>
    <br><a href="posts/your-post-filename.html" class="read-more">Read more &rarr;</a>
  </div>
</div>
```

For the card color, swap `img-sage` for any of these:
- `img-sage` — dark green
- `img-terra` — terracotta orange
- `img-dark` — warm dark brown
- `img-charcoal` — near black

**Step 4 — Push to GitHub**

Save both files and push to GitHub. Your post goes live automatically.

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

## How the contact form works (and what to do about it)

The contact form currently **does not send emails**. It needs to be connected to a service first. Since you already have Google Workspace, submissions will land directly in your `steph@talkwithsteph.co` inbox once set up.

The recommended free option is **EmailJS** (emailjs.com) — free up to 200 emails per month and requires no backend or server setup.

**Step 1 — Set up EmailJS**

1. Go to emailjs.com and create a free account
2. Go to **Email Services** and connect your Google Workspace account (sign in with your `steph@talkwithsteph.co` email)
3. Go to **Email Templates** and create a new template. Set it up so you receive the name, email, and message from the form. EmailJS will show you the variable names to use — they look like `{{from_name}}`, `{{message}}` etc.
4. Note down your **Service ID**, **Template ID**, and **Public Key** — you will need these in the next step

**Step 2 — Add EmailJS to your contact form**

Open `contact.html` and add this line inside the `<head>` section, just before `</head>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

Then find `<form>` and replace it with:
```html
<form id="contact-form">
```

Then find `<script src="config.js"></script>` near the bottom and add this block just before it:
```html
<script>
  emailjs.init("YOUR_PUBLIC_KEY");
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(function() {
        alert("Message sent! Steph will get back to you within 48 hours.");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Something went wrong. Please try again or email directly.");
      });
  });
</script>
```

Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with the values from your EmailJS account.

That's it. Every submission goes straight to your `steph@talkwithsteph.co` inbox. A developer can set this up in about 20 minutes if needed.

---

## How the newsletter signup works (and what to do about it)

The newsletter form on the blog page also **does not collect emails yet**. It needs to be connected to an email list service.

The two best free options for a coaching practice are **Kit** and **Mailchimp**. Kit (kit.com, formerly ConvertKit) is built specifically for creators and coaches and is free up to 10,000 subscribers — it is the better long-term choice. Mailchimp (mailchimp.com) is more widely known and free up to 500 subscribers.

**Setting up with Kit:**

1. Create a free account at kit.com
2. Go to **Grow → Landing Pages & Forms** and create a new inline form
3. Kit will give you an embed code — copy the form action URL from it
4. Open `blog.html` and find `<div class="newsletter-form">`
5. Replace the `<input>` and `<button>` inside it with Kit's embed code

**Setting up with Mailchimp:**

1. Create a free account at mailchimp.com
2. Go to **Audience → Signup Forms → Embedded Forms**
3. Copy the form action URL Mailchimp gives you
4. Open `blog.html`, find `<div class="newsletter-form">`, and replace the `<input>` and `<button>` with Mailchimp's embed code

Once connected, every signup is saved to your list automatically and you can email your subscribers directly from whichever platform you choose. A developer can set this up in about 15 minutes.

---

## How to go live with your Wix domain

Since your code is already on GitHub, use **GitHub Pages** — it is completely free and your site updates automatically every time you push a change.

**Step 1 — Turn on GitHub Pages**

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select your main branch and click **Save**
4. GitHub gives you a URL like `yourusername.github.io/repo-name` — your site is live there immediately

**Step 2 — Connect your Wix domain**

1. In GitHub Pages settings, find the **Custom Domain** field
2. Type in your domain (e.g. `talkwithsteph.co`) and click **Save**
3. GitHub will show you four IP addresses to add:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

**Step 3 — Update DNS in Wix**

1. Log into manage.wix.com
2. Go to **Domains** → find your domain → **Manage** → **Advanced DNS Settings**
3. Add four **A records** — one per IP address above
4. For each: set **Host** to `@` and **Value** to the IP address
5. Save

Within a few hours your domain points to your GitHub site. GitHub also handles the SSL certificate (the padlock) automatically. You keep paying Wix only for the domain name itself.

---

## Things to do before you go live

- [ ] Add real photos (replace placeholder boxes with images from `assets/images/`)
- [ ] Connect contact form via EmailJS — submissions go to `steph@talkwithsteph.co`
- [ ] Connect newsletter signup via Kit or Mailchimp
- [ ] Update `config.js` with your Linktree link
- [ ] Turn on GitHub Pages and connect your Wix domain
- [ ] Write and publish your first real blog post in the `posts/` folder

---

## Questions?

Bring this entire folder and this README to any web developer — everything is clearly organized and labeled and they will be able to help quickly.