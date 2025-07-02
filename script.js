window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.querySelector(".tribune").style.fontSize = "3vw";
  } else {
    document.querySelector(".tribune").style.fontSize = "6vw";
  }
}

function showSidebar(){
 const sidebar = document.querySelector (".sidebar");
 sidebar.style.width = "250px";
}

function hideSidebar(){
 const sidebar = document.querySelector (".sidebar");
 sidebar.style.width= "0";
}

let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .slider-item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    };
    reloadSlider ();
};

prev.onclick = function() {
    if ( active - 1 < 0 ) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval (() => {next.click()}, 7000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector ('.slider .dots li.active')
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval (() => {next.click()}, 7000);
};

dots.forEach ((list, key) => {
    list.addEventListener('click', function() {
        active = key;
        reloadSlider();
    })
})

