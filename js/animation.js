// ============================================
// INCEPT EDUCATION CONSULTANCY - ABOUT ANIMATION
// Typewriter country cycling + random flag swapping
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // ---- Typewriter: cycles through destination countries ----
    var countries = ['United Kingdom', 'United States', 'Australia', 'Germany', 'New Zealand'];
    var typeEl = document.getElementById('countryType');

    if (typeEl) {
        var countryIndex = 0;
        var charIndex = 0;
        var isDeleting = false;
        var typeSpeed = 100;
        var deleteSpeed = 50;
        var pauseAfterType = 1400;
        var pauseAfterDelete = 300;

        function tick() {
            var current = countries[countryIndex];

            if (!isDeleting) {
                charIndex++;
                typeEl.textContent = current.substring(0, charIndex);

                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(tick, pauseAfterType);
                    return;
                }
                setTimeout(tick, typeSpeed);
            } else {
                charIndex--;
                typeEl.textContent = current.substring(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    countryIndex = (countryIndex + 1) % countries.length;
                    setTimeout(tick, pauseAfterDelete);
                    return;
                }
                setTimeout(tick, deleteSpeed);
            }
        }

        tick();
    }

    // ---- Corner flags: cycle each badge through different destination countries ----
    var flagCodes = ['gb', 'us', 'au', 'de', 'nz', 'ca', 'ie', 'fr', 'sg', 'jp'];
    var flagImgs = document.querySelectorAll('.flag-corner img');

    if (flagImgs.length) {
        setInterval(function () {
            flagImgs.forEach(function (img) {
                var code = flagCodes[Math.floor(Math.random() * flagCodes.length)];
                img.style.opacity = '0';
                setTimeout(function () {
                    img.src = 'https://flagcdn.com/w80/' + code + '.png';
                    img.style.opacity = '1';
                }, 300);
            });
        }, 2200);
    }
});
