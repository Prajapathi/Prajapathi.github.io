//navlinks anime
gsap.from('.nav-links', {
    y: -50,
    duration: 1.2,
    stagger: 0.5,
    delay: 0.3,
    opacity: 0,
    ease: "power4.inOut"
});

gsap.from('.logo', {
    x: -150,
    duration: 1,
    opacity: 0,
    ease: "none"
})

setTimeout(() => {
    const typed = new Typed('.typed', {
        strings: ['Bio Technology Undergrad...',
            'Full Stack Web Developer...',
            'Data scientist...',
            'Competitive Coding'],
        smartBackspace: true,
        typeSpeed: 75,
        backspeed: 50,
        backDelay: 150,
        fadeOut: false,
        loop: true,
        loopCount: Infinity,
        showCursor: false
    });
}, 2800);

//header styling
const header = document.querySelector('header');

let prevYOffset = window.pageYOffset;

window.addEventListener('scroll', function () {
    let currYOffset = window.pageYOffset;

    if (currYOffset > prevYOffset) {
        header.classList.add('hide');
    }

    else {
        header.classList.remove('hide');
        header.classList.add('nav-back');
    }

    prevYOffset = currYOffset;
});

const options = {
    rootMargin: "-100px 0px 0px 0px",
};

const home = document.querySelector('#home');
const observer1 = new IntersectionObserver(function (entries, observer1) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            header.classList.remove('nav-back2');
            header.classList.add('nav-back');
        }

        else {
            header.classList.add('nav-back2');
            header.classList.remove('nav-back');
        }
    });
}, options);
observer1.observe(home);


//date
let date = new Date();
let year = date.getFullYear();
const yearspan = document.querySelector("#time span");
yearspan.textContent = year;


const toast = document.querySelector('toast');
toast.addEventListener('click', () => {
    toast.styles.display = "none"
})