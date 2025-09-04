const aside = document.querySelector("aside");

const burgerMenuBtn = document.getElementsByClassName("burger-menu")[0];

const closeBtn = document.getElementById("closeBtn");

const isAsideVisible = aside.style.display !== "none";

closeBtn.addEventListener("click", () => {
        aside.style.display = "none";  
});
burgerMenuBtn.addEventListener("click", () => {
    aside.style.display = "flex";
});



