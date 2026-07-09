INCEPT EDUCATION CONSULTANCY - FIXED FILES
============================================

WHAT'S IN THIS ZIP
- index.html
- css/style.css
- js/animation.js          (new: flag-swap + typewriter animation)
- js/destination-slider.js (new: the Study Destinations carousel logic)

IMPORTANT - HOW TO DEPLOY
1. In your GitHub repo, replace index.html and css/style.css with these versions.
2. Add js/animation.js and js/destination-slider.js as NEW files (don't delete your existing js/config.js and js/main.js — keep those, they're still required and untouched).
3. Commit and push.

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
