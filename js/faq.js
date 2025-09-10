const moreBtns = document.getElementsByClassName("moreBtn");
const infoElements = document.getElementsByClassName("info");

function showOrHideInfo(event) {
    const btn = event.target.parentElement;
    const index = Array.from(moreBtns).indexOf(btn);
    const currentInfoEl = infoElements[index];
    if (currentInfoEl.style.display !== "" && currentInfoEl.style.display !== "none") {
        currentInfoEl.style.display = 'none';
        btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    } else {
        currentInfoEl.style.display = 'block';
        btn.innerHTML = '<i class="fa-solid fa-minus"></i>';
    }
}
