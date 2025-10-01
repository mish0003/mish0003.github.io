/**
 * Initializes the study dashboard
 * 
 * Calculates the total credits earned based on passing grades (≥5.5),
 * color-codes the grade cells (green for pass, red for fail),
 * updates the progress bar to show completion percentage out of 60 total credits,
 * and displays the total earned credits in the study progress paragraph.
 * 
 * @returns {void}
 */
function initialiseDashboard() {
    let credits = 0;
    const creditElements = document.getElementsByClassName("credit");
    const gradeElements = document.getElementsByClassName("grade");
    
    // Loop through all grades and calculate total credits
    for (let i = 0; i < creditElements.length; i++) {
        // Check if grade is passing (5.5 or higher)
        if (gradeElements[i].innerText >= 5.5) {
            credits += parseFloat(creditElements[i].innerText);
            gradeElements[i].style.backgroundColor = '#a6ffacff'; // green for pass
        } else {
            gradeElements[i].style.backgroundColor = '#ff6c6cff'; // red for fail
        }
    }
    
    // Update progress bar width based on credits earned
    const progressDiv = document.getElementById("progress");
    const progress = ((credits * 100) / 60).toFixed(2); // 60 total credits needed
    progressDiv.style.width = progress + "%";
    
    // Display total credits in the paragraph
    const studyProgressParagraph = document.getElementById('study-progress-paragraph');
    studyProgressParagraph.innerText += ` - ${credits}EC`;
}

// Run the function when page loads
initialiseDashboard();