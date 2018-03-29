var body = document.getElementById("body");

// NavBarMenu
var li = $("#navMenu ul li");
var lis = document.querySelectorAll("#navMenu ul li");
var liImg = $("#navMenu ul li img");

// VideoPage JS
var mainVideoPage = document.getElementById("mainVideoPage");
var iframe = document.querySelector("#mainVideoPage #videoSide iframe");
var closeBtn = document.getElementById("closeBtn")
var button = document.getElementById("button");

// SliderSec JS
var slider = document.querySelector("#slider");
var slideImgs = document.querySelectorAll("#slider #sliderImgs img");
var circle = document.querySelectorAll("#circles .circle");
var whiteCircle = document.querySelector("#circles .whiteCircle");
var arrows = document.querySelectorAll("#slider .arrows");
var next = document.querySelector("#slider .next");
var prev = document.querySelector("#slider .prev");

// Foods Sec
var cols = document.querySelectorAll("#BreakfastSec .rows .cols");
var colsImg = document.querySelectorAll("#BreakfastSec .rows .cols .colsPhoto img");



// function nextSlide() {
//     var activeSlideImg = document.querySelector(".active");
//     var whiteCircle = document.querySelector(".whiteCircle");
//     if (activeSlideImg.nextElementSibling != null) {
//         activeSlideImg.classList.remove("active");
//         activeSlideImg.nextElementSibling.classList.add("active");

//     } else {
//         activeSlideImg.classList.remove("active");
//         slideImgs[0].classList.add("active");
//     }

//     if (whiteCircle.nextElementSibling != null) {
//         whiteCircle.classList.remove("whiteCircle");
//         whiteCircle.nextElementSibling.classList.add("whiteCircle");

//     } else {
//         whiteCircle.classList.remove("whiteCircle");
//         circle[0].classList.add("whiteCircle");
//     }
// }

// NavBarMenu Icons
$("#navMenu ul li").each(function () {
    this.onmouseover = function () {
        this.children[0].style.opacity = "1";
    }
    this.onmouseleave = function () {
        this.children[0].style.opacity = null;
    }
});

// Slide Images All JS
function nextSlide() {
    var activeSlideImg = document.querySelector(".active");
    var whiteCircle = document.querySelector(".whiteCircle");

    if (activeSlideImg.nextElementSibling != null) {
        activeSlideImg.animate([{ transform: "translate(0px)" },
        { transform: "translate(-1000px)" }], { duration: 2000 });
        activeSlideImg.nextElementSibling.animate([{ transform: "translate(1000px)" },
        { transform: "translate(0px)" }], { duration: 2000 });
        setTimeout(function () {
            activeSlideImg.classList.remove("active");
        }, 2000);
        activeSlideImg.nextElementSibling.classList.add("active");
    } else {
        activeSlideImg.animate([{ transform: "translate(0px)" },
        { transform: "translate(-1000px)" }], { duration: 2000 });
        slideImgs[0].classList.add("active");
        slideImgs[0].animate([{ transform: "translate(1000px)" },
        { transform: "translate(0px)" }], { duration: 1000 });
        setTimeout(function () {
            activeSlideImg.classList.remove("active");
        }, 1000);

    }
    if (whiteCircle.nextElementSibling != null) {
        whiteCircle.classList.remove("whiteCircle");
        whiteCircle.nextElementSibling.classList.add("whiteCircle");

    } else {
        whiteCircle.classList.remove("whiteCircle");
        circle[0].classList.add("whiteCircle");
    }
}

function prevSlide() {
    var activeSlideImg = document.querySelector(".active");
    var whiteCircle = document.querySelector(".whiteCircle");
    if (activeSlideImg.previousElementSibling != null) {
        activeSlideImg.classList.remove("active");
        activeSlideImg.previousElementSibling.classList.add("active");

    } else {
        activeSlideImg.classList.remove("active");
        slideImgs[slideImgs.length - 1].classList.add("active");
    }

    if (whiteCircle.previousElementSibling != null) {
        whiteCircle.classList.remove("whiteCircle");
        whiteCircle.previousElementSibling.classList.add("whiteCircle");

    } else {
        whiteCircle.classList.remove("whiteCircle");
        circle[circle.length - 1].classList.add("whiteCircle");
    }
}

setInterval(function(){
    nextSlide();
}, 6000);

next.addEventListener("click", function () {
    nextSlide();
});

prev.addEventListener("click", function () {
    prevSlide();

});

slider.onmouseover = function () {
    arrows.forEach(function (a) {
        a.style.opacity = "1";
        a.style.transition = "0.5s";
    });

};

slider.onmouseleave = function () {
    arrows.forEach(function (a) {
        a.style.opacity = "0s";
        a.style.transition = "0.5s";
    });

};

// Main Page Reciepes
cols.forEach(function (col) {
    col.onclick = function () {
        mainVideoPage.style.display = "block";
        var src = col.children[0].children[0].getAttribute("title");
        iframe.src = src;
    };
    col.onmouseover = function () {
        col.style.transform = "scale(1.05)";
        col.style.boxShadow = "#a4a4a480 5px 10px 5px";
    };
});

cols.forEach(function (col) {
    col.onmouseleave = function () {
        col.style.transform = null;
        col.style.boxShadow = null;
    };
});

closeBtn.addEventListener("click", function () {
    mainVideoPage.style.display = null;
    iframe.src = null;
});

window.onkeyup = function (keyClose) {
    if (mainVideoPage.style.display == "block") {
        if (keyClose.which == 27) {
            mainVideoPage.style.display = null;
            iframe.src = null;
        };
    };
};

window.onclick = function (clickClose) {
    if (clickClose.target.classList.contains("mainVideoPage") &&
        mainVideoPage.style.display == "block") {
        mainVideoPage.style.display = null;
        iframe.src = null;
    };
};



