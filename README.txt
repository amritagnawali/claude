INCEPT EDUCATION CONSULTANCY - FIXED FILES
============================================

WHAT'S IN THIS ZIP
- index.html
- ceo-message.html      (new: standalone "Message from CEO" page)
- css/style.css
- js/animation.js          (new: flag-swap + typewriter animation)
- js/destination-slider.js (new: the Study Destinations carousel logic)

NEW: MESSAGE FROM CEO PAGE
- "Message from CEO" is now the first item in the About dropdown menu in
  the navigation (About > Message from CEO, Our Story, Why Choose Us...).
  It does NOT appear as content or a button on the home page itself.
- Clicking it opens ceo-message.html, a separate page.
- ceo-message.html currently has placeholder text (marked [Placeholder])
  and a placeholder name/photo icon. Search for data-key="ceoName",
  "ceoTitle", "ceoMsg1"-"ceoMsg4", "ceoSigName", "ceoSigTitle" to replace
  with the real CEO name, title, message, and (if you have one) swap the
  ceo-photo icon div for a real <img>.
- The page reuses your site's header/footer and links back to index.html.

IMPORTANT - HOW TO DEPLOY
1. In your GitHub repo, replace index.html and css/style.css with these versions.
2. Add ceo-message.html, js/animation.js, and js/destination-slider.js as
   NEW files (don't delete your existing js/config.js and js/main.js —
   keep those, they're still required and untouched).
3. Commit and push.

NOTE: ceo-message.html loads your existing js/config.js and js/main.js for
consistent header/footer behavior (hamburger menu, back-to-top button).
If your main.js references chatbot elements that don't exist on this page,
check your browser console after deploying — you may want to wrap those
lines in a null-check (e.g. `if (chatbotToggle) { ... }`) if errors appear.

WHY YOUR SITE LOOKED UNSTYLED
Your CSS wasn't loading on the live site even though the HTML was correct.
This happens when css/style.css either wasn't uploaded to the repo, or the
filename/folder casing doesn't exactly match "css/style.css" (GitHub Pages
is case-sensitive). Double check your repo has a folder named exactly
"css" containing a file named exactly "style.css".

BUGS FIXED IN THIS PASS
- Removed leftover onclick="openCountryModal(...)" calls in the nav dropdown
  that pointed to a function that no longer exists (was linked to a modal
  that got removed) — these were throwing console errors on click.
- Fixed an undefined CSS variable (var(--orange)) in the top bar icons.
- Removed default top margin/gap and made all images render as block
  elements so there's no stray inline whitespace gap at the top of the page.
- (From the previous pass) fixed broken .hero CSS selectors, removed an
  invalid nested <html> document, removed dead unused inline JS.

No design, layout, colors, or content were changed — only bug fixes and
dead code removal, as requested.
