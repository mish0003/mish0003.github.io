/**
 * Toggles the visibility of info sections in an accordion-style interface
 * 
 * When a button is clicked, this function shows or hides the corresponding
 * info element and switches the button icon between plus and minus.
 * 
 * @param {Event} event - The click event triggered by the user
 * @returns {void}
 */
function showOrHideInfo(event) {
    const moreBtns = document.getElementsByClassName("moreBtn");
    const infoElements = document.getElementsByClassName("info");
    
    // Get the clicked button and find its index
    const btn = event.target.parentElement;
    const index = Array.from(moreBtns).indexOf(btn);
    const currentInfoEl = infoElements[index];
    
    // Toggle visibility of the info section
    if (currentInfoEl.style.display !== "" && currentInfoEl.style.display !== "none") {
        // Hide the info section
        currentInfoEl.style.display = 'none';
        btn.innerHTML = '<i class="fa-solid fa-plus"></i>'; // show plus icon
    } else {
        // Show the info section
        currentInfoEl.style.display = 'block';
        btn.innerHTML = '<i class="fa-solid fa-minus"></i>'; // show minus icon
    }
}