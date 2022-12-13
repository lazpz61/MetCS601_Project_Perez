const imgs = document.getElementById("carousels");
const imgs2 = document.getElementById("carousels2");
const imgs3 = document.getElementById("carousels3");
const imgs4 = document.getElementById("carousels4");

const img = document.querySelectorAll("#carousels img");
const img2 = document.querySelectorAll("#carousels2 img");
const img3 = document.querySelectorAll("#carousels3 img");
const img4 = document.querySelectorAll("#carousels4 img");

let idx = 0;
let idx2 = 0;
let idx3 = 0;
let idx4 = 0;

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}
function run2() {
    idx2++;

    if (idx2 > img2.length -1) {
        idx2 = 0;
    }

    imgs2.style.transform = `translateX(${-idx2 * 500}px)`;
}
function run3() {
    idx3++;

    if (idx3 > img3.length - 1) {
        idx3 = 0;
    }

    imgs3.style.transform = `translateX(${-idx3 * 500}px)`;
}
function run4() {
    idx4++;

    if (idx4 > img4.length - 1) {
        idx4 = 0;
    }

    imgs4.style.transform = `translateX(${-idx4 * 500}px)`;
}

setInterval(run, 2500);
setInterval(run2, 4000);
setInterval(run3, 2500);
setInterval(run4, 4000);
