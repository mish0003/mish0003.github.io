const aside = document.querySelector("aside");

const burgerMenuBtn = document.getElementsByClassName("burger-menu")[0];

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
        aside.classList.remove("visible");  
});
burgerMenuBtn.addEventListener("click", () => {
    aside.classList.add("visible");
});




