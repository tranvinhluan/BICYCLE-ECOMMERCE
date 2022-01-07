let bike_slide = document.querySelector('#bike-slide')

let bike_slide_items = bike_slide.querySelectorAll('.slide')

let bike_slide_index = 0

let bike_slide_play = true

let bike_slide_control_items = bike_slide.querySelectorAll('.slide-control-item')

let slide_next = bike_slide.querySelector('.slide-next')

let slide_prev = bike_slide.querySelector('.slide-prev')

let header = document.querySelector('header')

showSlide = (index) => {
    bike_slide.querySelector('.slide.active').classList.remove('active')
    bike_slide.querySelector('.slide-control-item.active').classList.remove('active')
    bike_slide_control_items[index].classList.add('active')
    bike_slide_items[index].classList.add('active')
}

nextSlide = () => {
    bike_slide_index = bike_slide_index + 1 === bike_slide_items.length ? 0 : bike_slide_index + 1
    showSlide(bike_slide_index)
}

prevSlide = () => {
    bike_slide_index = bike_slide_index - 1 < 0 ? bike_slide_items.length - 1 : bike_slide_index - 1
    showSlide(bike_slide_index)
}

slide_next.addEventListener('click', () => nextSlide())

slide_prev.addEventListener('click', () => prevSlide())

// Add event to slide select.
bike_slide_control_items.forEach((item, index) => {
    item.addEventListener('click', () => showSlide(index))
})

// Pause slide when mouse come in slide.
bike_slide.addEventListener('mouseover', () => bike_slide_play = false)

// Resume slide when mouse leave out slide.
bike_slide.addEventListener('mouseleave', () => bike_slide_play = true)

setTimeout(() => bike_slide_items[0].classList.add('active'), 200);

// auto slide 
setInterval(() => {
    if (!bike_slide_play) return
    nextSlide()  
}, 5000);

// change header style when scroll 
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
})

// element show on scroll
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let ele_to_show = document.querySelectorAll('.show-on-scroll')

isEleInViewPort = (ele) => {
    let rect = ele.getBoundingClientRect()

    let distance = 200

    return rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance)
}

loop = () => {
    ele_to_show.forEach(ele => {
        if (isEleInViewPort(ele))
            ele.classList.add('show')
    })

    scroll(loop)
}

loop()

// scroll to top
let scroll_top = document.querySelector('.scroll-top');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 60) {
        scroll_top.style.display = "block";
    } else {
        scroll_top.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo(0, 0);
}

// light and dark theme
var moon = document.getElementById("moon");

moon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        moon.querySelector('i').setAttribute("class", "bx bx-sun");
    } else {
        moon.querySelector('i').setAttribute("class", "bx bx-moon");
    }
}

