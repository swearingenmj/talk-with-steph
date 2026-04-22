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

## What files are in this folder

| File | What it is |
|------|------------|
| `index.html` | Your home page |
| `about.html` | Your About page |
| `work-with-me.html` | Your Work with Me page |
| `blog.html` | Your Blog page |
| `contact.html` | Your Contact page |
| `style.css` | Controls colors, fonts, and spacing across all pages |
| `config.js` | **The most important file for updates — your links live here** |
| `README.md` | This guide |

---

## How to edit your website

### The safest way to edit (recommended)

1. Open the file you want to edit in a plain text editor.
   - On a Mac: use **TextEdit** (make sure it's in plain text mode: Format → Make Plain Text)
   - On a PC: use **Notepad**
   - Even better: download the free app **Visual Studio Code** at code.visualstudio.com — it color-codes everything and makes editing much easier
2. Use **Edit → Find** (or Cmd+F / Ctrl+F) to search for the text you want to change
3. Make your edit
4. Save the file
5. Open it in your browser to double-check it looks right before uploading

---

## How to update your booking link or Instagram

This is the most important thing to know. Your booking link and Instagram link are stored in **one file only**: `config.js`.

Open `config.js` and you will see this at the top:

```javascript
const SITE_CONFIG = {
  bookingLink: "https://cal.com/steph-straub/45min",
  instagramLink: "https://www.instagram.com/talkwithsteph.co",
  instagramHandle: "@talkwithsteph.co",
  linktreeLink: "https://linktr.ee/talkwithsteph",
};
```

To update any link, just replace the address inside the quotes and save the file. The change will automatically apply across every page of your site. You never need to hunt through five different files.

---

## How to update your text

### Changing a heading or paragraph

Open the relevant HTML file, use Cmd+F / Ctrl+F to search for the words you want to change, replace them, and save.

### Changing the hero headline (home page)

Open `index.html` and search for:
```
You love your life.
```
You will find the headline section. Edit the text between the tags.

### Changing the pull quote (home page)

Search for:
```
I just feel stuck.
```
Replace the quote with your own words.

---

## How to add your photo

Right now the site shows placeholder boxes where your photos go. When you have a photo ready:

1. Save your photo as a `.jpg` file and place it in the same folder as your HTML files
2. Name it something simple, like `steph-photo.jpg`
3. Open the HTML file where you want the photo to appear
4. Search for `photo-placeholder`
5. Replace `<div class="photo-placeholder"></div>` with:
```html
<img src="steph-photo.jpg" alt="Photo of Steph" style="width:100%; height:100%; object-fit:cover;" />
```

If this feels confusing, any web developer can do this in five minutes.

---

## How to add a new blog post

Open `blog.html` and find any existing blog card that looks like this:

```html
<div class="blog-card">
  <div class="blog-card-img img-sage"></div>
  <div class="blog-card-body">
    <div class="post-tag">On identity</div>
    <div class="post-title">Your post title here</div>
    <div class="post-excerpt">A short summary of your post...</div>
    <div class="post-meta">Month Year &nbsp;·&nbsp; X min read</div>
    <br><a href="#" class="read-more">Read more &rarr;</a>
  </div>
</div>
```

Copy the whole block, paste it above or below an existing card, and fill in your own title, excerpt, date, and reading time.

For the colored image at the top of each card, swap the color by changing the class name:
- `img-sage` — dark green
- `img-terra` — terracotta orange
- `img-dark` — warm dark brown
- `img-charcoal` — near black

---

## Your brand colors

If you ever work with a designer or need to match your colors anywhere else:

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

The contact form on your site currently **does not send emails**. It looks and works visually, but submissions go nowhere until you connect it to a service.

The easiest free option is **Formspree** (formspree.io):

1. Go to formspree.io and create a free account
2. Create a new form — they will give you a short code, something like `xpzgkwqr`
3. Open `contact.html` and find this line:
   ```html
   <form>
   ```
4. Replace it with:
   ```html
   <form action="https://formspree.io/f/YOURCODE" method="POST">
   ```
   Replace `YOURCODE` with the code Formspree gave you
5. Save the file and re-upload it

After that, every message submitted through your contact form will land directly in your email inbox.

---

## How the newsletter signup works (and what to do about it)

The newsletter signup form on your blog page also **does not collect emails yet**. It is visual only.

The easiest free option is **Mailchimp** (mailchimp.com):

1. Create a free Mailchimp account
2. Create an audience (this is your email list)
3. Go to Audience → Signup Forms → Embedded Forms
4. Copy the form action URL Mailchimp gives you
5. Open `blog.html` and find:
   ```html
   <div class="newsletter-form">
   ```
6. Replace the `<input>` and `<button>` inside it with Mailchimp's embedded form code

Once connected, every email address submitted on your blog page will be saved to your Mailchimp list automatically and you can email your list directly from Mailchimp.

If this feels like too many steps, a developer can set it up in 15 minutes.

---

## How to go live with your Wix domain

Since your code is already on GitHub, the easiest and completely free option is **GitHub Pages**. You host the site on GitHub and point your Wix domain to it. Wix just holds the domain name — you are not using their website builder at all.

### How to set it up

**Step 1 — Turn on GitHub Pages**

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Click **Pages** in the left sidebar
4. Under "Source", select your main branch and click **Save**
5. GitHub will show you a URL like `yourusername.github.io/repo-name` — your site is now live there

**Step 2 — Connect your Wix domain**

1. Still in GitHub Pages settings, find the **Custom Domain** field
2. Type in your domain (e.g. `talkwithsteph.co`) and click **Save**
3. GitHub will show you four IP addresses to add — they look like:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

**Step 3 — Update your DNS in Wix**

1. Log into your Wix account at manage.wix.com
2. Go to **Domains** and find your domain
3. Click **Manage** then **Advanced DNS Settings** (or just "DNS Settings")
4. You need to add four **A records** — one for each IP address above
5. For each one: set the **Host** to `@` and the **Value** to the IP address
6. Save your changes

Within a few hours (sometimes up to 24 hours) your domain will point to your GitHub site. GitHub also gives you a free SSL certificate (the padlock in the browser) automatically.

### Updating your site going forward

This is the best part. Because the site lives on GitHub, any time you push a change to your repository the live site updates automatically. No uploading files, no logging into a hosting platform.

---

## Things to do before you go live

- [ ] Add real photos of yourself (replace the placeholder boxes)
- [ ] Connect your contact form via Formspree
- [ ] Connect your newsletter signup via Mailchimp
- [ ] Update `config.js` with your Linktree link when you have it
- [ ] Choose how to go live: Netlify + Wix domain, or rebuild in Wix Editor
- [ ] Write and publish your first real blog post

---

## Questions?

If something is not working or you want to make a bigger change, bring this entire folder and this README to any web developer. Everything is clearly organized and labeled — they will be able to help you quickly without needing a long explanation.