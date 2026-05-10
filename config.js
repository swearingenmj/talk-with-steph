// ============================================================
//  TALK WITH STEPH — SITE CONFIGURATION
//  Edit this file to update links across the entire website.
//  You only need to change things here — nowhere else.
// ============================================================

const SITE_CONFIG = {
  // Your booking link
  bookingLink: "https://cal.com/steph-straub/45min",
  // Your Instagram profile link
  instagramLink: "https://www.instagram.com/talkwithsteph.co",
  // Your Instagram handle (shown as text)
  instagramHandle: "@talkwithsteph.co",
  // Your Linktree link (used in footer or wherever you add it)
  linktreeLink: "https://linktr.ee/talkwithsteph",
};

// ============================================================
//  DO NOT EDIT BELOW THIS LINE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  // Replace all booking links
  document.querySelectorAll("a[data-link='booking']").forEach(function (el) {
    el.href = SITE_CONFIG.bookingLink;
  });
  // Replace all Instagram links
  document.querySelectorAll("a[data-link='instagram']").forEach(function (el) {
    el.href = SITE_CONFIG.instagramLink;
    if (el.dataset.showHandle === "true") {
      el.textContent = SITE_CONFIG.instagramHandle;
    }
  });
  // Replace all Linktree links
  document.querySelectorAll("a[data-link='linktree']").forEach(function (el) {
    el.href = SITE_CONFIG.linktreeLink;
  });
});
