const nav = document.querySelector(".elements");
const button = document.querySelector(".rows");
const spans = document.querySelectorAll(".span");

function toggler() {
    navigator.classList.toggle('sidebar');
    lines[0].classList.toggle('line-0');
    lines[1].classList.toggle('line-1');
    lines[2].classList.toggle('line-2');
}

button.addEventListener('click', toggler);