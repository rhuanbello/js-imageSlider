let slideIndex = 1;

const showSlides = (n) => {
    const slides = document.querySelectorAll('.mySlides')
    const dots = document.querySelectorAll('.dot')
    console.log(dots)

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => {
        item.style.display = 'none'

    })

    dots.forEach((item) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        }

    })

    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].classList.add('active')

}

const plusSlides = (n) => {
    showSlides(slideIndex += n)

}

const currentSlide = (n) => {
    showSlides(slideIndex = n)
}

showSlides(slideIndex)