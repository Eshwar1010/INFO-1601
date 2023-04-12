function show() {
    let readMore = document.querySelector("#dots");
    let moreText = document.querySelector("#more");
    let readLess = document.querySelector("#less");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMore.style.display = "none";
        readLess.style.display = "inline";
    }
    else {
        moreText.style.display = "none";
        readMore.style.display = "inline";
        readLess.style.display = "none";
    }
}

function showMore() {
    let readMore2 = document.querySelector("#dots2");
    let moreText2 = document.querySelector("#more2");
    let readLess2 = document.querySelector("#less2");

    if (moreText2.style.display === "none") {
        moreText2.style.display = "inline";
        readMore2.style.display = "none";
        readLess2.style.display = "inline";
    }
    else {
        moreText2.style.display = "none";
        readMore2.style.display = "inline";
        readLess2.style.display = "none";
    }
}