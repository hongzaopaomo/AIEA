class SliderManager {
    constructor() {
        this.sliderContainer = document.querySelector('.slider-container');
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.autoPlayInterval = null;
        this.isAnimating = false;
        
        this.init();
    }

    init() {
        this.setupInfiniteSlider();
        this.bindEvents();
        this.startAutoPlay();
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => {
            if (!this.isAnimating) {
                this.prevSlide();
            }
        });
        
        this.nextBtn.addEventListener('click', () => {
            if (!this.isAnimating) {
                this.nextSlide();
            }
        });

        this.sliderContainer.addEventListener('transitionend', () => {
            this.handleTransitionEnd();
        });
    }

    setupInfiniteSlider() {
        const slides = Array.from(this.slides);
        const clonesBefore = slides.map(slide => slide.cloneNode(true));
        const clonesAfter = slides.map(slide => slide.cloneNode(true));
        
        clonesBefore.forEach(clone => this.sliderContainer.insertBefore(clone, this.slides[0]));
        clonesAfter.forEach(clone => this.sliderContainer.appendChild(clone));
        
        this.totalSlides = this.slideCount * 3;
        this.currentIndex = this.slideCount;
        this.updateSliderPosition(false);
    }

    updateSliderPosition(useTransition = true) {
        this.isAnimating = useTransition;
        const offset = -(100 * this.currentIndex) / this.totalSlides;
        this.sliderContainer.style.transition = useTransition ? 'transform 0.5s ease-in-out' : 'none';
        this.sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    handleTransitionEnd() {
        if (this.currentIndex <= this.slideCount - 1) {
            this.currentIndex += this.slideCount;
            this.updateSliderPosition(false);
        } else if (this.currentIndex >= this.slideCount * 2) {
            this.currentIndex -= this.slideCount;
            this.updateSliderPosition(false);
        }
        this.isAnimating = false;
    }

    prevSlide() {
        this.pauseAutoPlay();
        this.currentIndex--;
        this.updateSliderPosition(true);
        this.resumeAutoPlay();
    }

    nextSlide() {
        this.pauseAutoPlay();
        this.currentIndex++;
        this.updateSliderPosition(true);
        this.resumeAutoPlay();
    }

    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resumeAutoPlay() {
        this.startAutoPlay();
    }

    startAutoPlay() {
        this.pauseAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            if (!this.isAnimating) {
                this.nextSlide();
            }
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SliderManager();
}); 