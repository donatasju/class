'use strict';
var div = document.getElementById("gallery");

function createImages(picAmount) {
    for (let i = 1; i <= picAmount; i++) {
        var image4 = document.createElement("img");
        image4.setAttribute("class", "images");
        div.appendChild(image4);
        image4.src = "img" + i + ".png";
    }
}

function fn() {
    let url = this.getAttribute("src");
    let image2 = document.getElementById("main-gallery");
    image2.setAttribute("src", url);
}

function opacity() {
    let div = document.getElementById('main-gallery');
    let opacity = getComputedStyle(div).getPropertyValue("opacity")

    if (opacity < 1) {
        div.style.opacity = 1;
    } else {
        div.style.opacity = 0.6;
    }
}

createImages(4);

document.querySelectorAll(".images").forEach(function(ele) {
    ele.addEventListener('click', fn);
})
document.getElementById('filter').addEventListener('click', opacity);











// var image = document.createElement("img");
// div.appendChild(image);
// image.setAttribute("class", "images");
// image.src = 'php.png';