function changeImage() {
    let image = document.querySelector("#P1image");
    if (document.screen.width >= 680) {
        image.src.innerHTML = "IMAGES/jumpUP.png";
    }
    else {
        image.src.innerHTML = "IMAGES/jumpUpFull.png";
    }
}

changeImage();
