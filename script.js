let scroll; // Declare scroll here

function loading() {
    var tl = gsap.timeline();
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: 'expo.out'
    })
    .from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.7,
        ease: 'expo.out'
    }, "enim")
    .to("#loader h1", {
        delay: 0.6,
        duration: 0.7,
        color: "black"
    }, "enim")
    .to("#loader", {
        duration: 0.5,
        onComplete: function () {
            document.getElementById('loader').style.display = 'none';
            // initScroll();
        }
    });
}

var btn = document.querySelector('#btn');

btn.addEventListener("click", () => {
    if (scroll) {
        scroll.scrollTo(0); 
    }
});

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var bgimg = e.getAttribute('data-img');
        page2.style.backgroundImage = `url('${bgimg}')`;
    });

    e.addEventListener("mouseleave", function () {
        page2.style.backgroundImage = ''; 
        page2.style.backgroundColor = 'black'; 
    });
});

function initScroll() {
    scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loading();
    initScroll();
});
