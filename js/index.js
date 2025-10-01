/**
 * Adds functionality to the aside menu (slide-in sidebar)
 * 
 * Sets up event listeners for opening and closing the aside menu.
 * The burger menu button opens the sidebar, and the close button closes it
 * by toggling the 'visible' class.
 * 
 * @returns {void}
 */
function addAsideFunctionality() {
    const aside = document.querySelector("aside");
    const burgerMenuBtn = document.getElementsByClassName("burger-menu")[0];
    const closeBtn = document.getElementById("closeBtn");

    // Close the aside when close button is clicked
    closeBtn.addEventListener("click", () => {
        aside.classList.remove("visible");
    });

    // Open the aside when burger menu is clicked
    burgerMenuBtn.addEventListener("click", () => {
        aside.classList.add("visible");
    });
}

// Initialize aside functionality when page loads
addAsideFunctionality();