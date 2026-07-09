// ============================================
// INCEPT EDUCATION CONSULTANCY - DESTINATION SLIDER
// (Study Destinations carousel in the #countries section)
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    var track = document.getElementById('sliderTrack');
    if (!track) return;

    var cards = Array.from(track.children);
    var prevBtn = document.querySelector('.arrow-prev');
    var nextBtn = document.querySelector('.arrow-next');
    var dotsWrap = document.getElementById('sliderDots');

    function getVisibleCount() {
        var w = window.innerWidth;
        if (w <= 600) return 1;
        if (w <= 900) return 2;
        return 3;
    }

    var visible = getVisibleCount();
    var index = 0;
    var maxIndex = Math.max(0, cards.length - visible);

    function buildDots() {
        dotsWrap.innerHTML = '';
        for (var i = 0; i <= maxIndex; i++) {
            var dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === index ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            (function (idx) {
                dot.addEventListener('click', function () { goTo(idx); });
            })(i);
            dotsWrap.appendChild(dot);
        }
    }

    function update() {
        var cardWidth = cards[0].getBoundingClientRect().width;
        var gap = 24;
        var offset = index * (cardWidth + gap);
        track.style.transform = 'translateX(-' + offset + 'px)';

        Array.from(dotsWrap.children).forEach(function (d, i) {
            d.classList.toggle('active', i === index);
        });

        prevBtn.style.opacity = index === 0 ? '0.4' : '1';
        prevBtn.disabled = index === 0;
        nextBtn.style.opacity = index === maxIndex ? '0.4' : '1';
        nextBtn.disabled = index === maxIndex;
    }

    function goTo(i) {
        index = Math.min(Math.max(i, 0), maxIndex);
        update();
    }

    prevBtn.addEventListener('click', function () { goTo(index - 1); });
    nextBtn.addEventListener('click', function () { goTo(index + 1); });

    window.addEventListener('resize', function () {
        var newVisible = getVisibleCount();
        if (newVisible !== visible) {
            visible = newVisible;
            maxIndex = Math.max(0, cards.length - visible);
            index = Math.min(index, maxIndex);
            buildDots();
        }
        update();
    });

    var startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
        var diff = e.changedTouches[0].clientX - startX;
        if (diff > 50) goTo(index - 1);
        else if (diff < -50) goTo(index + 1);
    }, { passive: true });

    buildDots();
    update();
});
