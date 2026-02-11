export function importJs() {
    $(document).ready(function () {
        let slides = $(".js-Slider-slide");
        let bullets = $(".js-Slider-bullet");
        let currentIndex = 1;
        let totalSlides = slides.length;
        let intervalTime = 8000; // Temps entre les slides (5s)
        let autoSlide;

        function goToSlide(index) {
            slides.removeClass("is-prev is-current is-next");

            slides.eq(index - 1).addClass("is-prev");
            slides.eq(index).addClass("is-current");
            slides.eq((index + 1) % totalSlides).addClass("is-next");

            bullets.removeClass("is-current");
            bullets.eq(index).addClass("is-current");

            currentIndex = index;
        }

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % totalSlides;
            goToSlide(nextIndex);
        }

        function prevSlide() {
            let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            goToSlide(prevIndex);
        }

        // Activation des bullets
        bullets.click(function () {
            let index = $(this).data("target");
            goToSlide(index);
            resetAutoSlide();
        });

        function startAutoSlide() {
            autoSlide = setInterval(nextSlide, intervalTime);
        }

        function resetAutoSlide() {
            clearInterval(autoSlide);
            startAutoSlide();
        }

        // Initialisation
        goToSlide(currentIndex);
        startAutoSlide();
    });
}