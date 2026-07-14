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

    // ---- About card background: cycles through country photos every 2s ----
    var aboutSlides = document.querySelectorAll('.about-bg-slide');
    if (aboutSlides.length) {
        var aboutIndex = 0;
        setInterval(function () {
            aboutSlides[aboutIndex].classList.remove('active');
            aboutIndex = (aboutIndex + 1) % aboutSlides.length;
            aboutSlides[aboutIndex].classList.add('active');
        }, 2000);
    }
});
