// make element count when you reach their site

// Our Skills section

let progresses = document.querySelectorAll(".prog span");
let skillsSection = document.querySelector(".skills");
let pPercent = document.querySelectorAll(".bar p");
let started = false;

window.addEventListener("scroll", () => {
    if (window.scrollY >= skillsSection.offsetTop - 400) {
        if (!started) {
            progresses.forEach((prog) => {
                prog.style.width = prog.dataset.progress;
            });
        }
        started = true; // without it the scroll edition will trigger the function unless the condition has been broken
    }
});

// Stats Section counter

let statsSection = document.querySelector(".stats");
let statusEl = document.querySelectorAll("span[data-counter]");
let started2 = false;

window.addEventListener("scroll", () => {
    if (window.scrollY >= statsSection.offsetTop - 400) {
        if (!started2) {
            statusEl.forEach((el) => counterAccelerator(el));
        }
        started2 = true;
        // to prevent it from calling the counterAcc every time window scroll to that position
    }
});

function counterAccelerator(el) {
    let limit = el.dataset.counter;
    let number = parseInt(el.textContent); // + will concat with text so we first convert to number
    let count = setInterval(() => {
        number++;
        el.textContent = number;
        if (el.textContent == limit) {
            clearInterval(count);
            statusEl[3].textContent += "K"; // for The last one K Thousands
        }
    }, 2000 / limit);
}

// count down event
// in mill seconds The Z at the end means UTC time (Zulu time)

let countDownDate = new Date("Dec 31, 2026 23:59:59Z").getTime();

// timer

let timer = setInterval(() => {
    let allDate = new Date().getTime();

    let dateDiff = countDownDate - allDate;
    // get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    // console.log(dateDiff / 1000 / 60 / 60 / 24);
    // console.log(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));
    document.querySelector(".days span").innerHTML =
        days < 10 ? `0${days}` : days;
    document.querySelector(".hours span").innerHTML =
        hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes span").innerHTML =
        minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds span").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(timer);
    }
});

// mega open click

let menu = document.querySelector(".mega");
let mega_menu = document.querySelector(".mega-menu");

menu.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("open");
});

mega_menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    menu.classList.remove("open");
});

document.onkeyup = function (e) {
    // console.log(e); // console the key properties

    if (e.key === "Escape") {
        menu.classList.remove("open");
    }
};

// Scroll To Top

let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 1000) {
        scroller.classList.remove("hidden");
    } else {
        scroller.classList.add("hidden");
    }
});

scroller.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

/*
📌 In your hamburger menu
Without stopPropagation():
When you click the hamburger, the menu opens.
But that same click also bubbles up to document, which has the “close menu” code → so it closes immediately.

With stopPropagation():
The click on the hamburger stays there and doesn’t trigger the document listener.
Result: the menu stays open.

Css line 487: display: -webkit-box; + -webkit-box-orient: vertical; → lets the browser treat text as a multi-line box.
-webkit-line-clamp: 3; → clamps the text to 3 lines.
overflow: hidden; → hides everything after those 3 lines.
The browser automatically adds an ellipsis (…).
⚠️ This works in all modern browsers (Chrome, Edge, Safari, Opera, most versions of Firefox with -webkit support).
*/
