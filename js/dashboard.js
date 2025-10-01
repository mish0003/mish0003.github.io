function initialiseDashboard() {
    let credits = 0;
    const creditElements = document.getElementsByClassName("credit");
    const gradeElements = document.getElementsByClassName("grade");
    for (let i = 0; i < creditElements.length; i++) {
        if (gradeElements[i].innerText >= 5.5) {
            credits += parseFloat(creditElements[i].innerText);
            gradeElements[i].style.backgroundColor = '#a6ffacff';
        }else{
            gradeElements[i].style.backgroundColor = '#ff6c6cff';
        }
    }
    const progressDiv = document.getElementById("progress");
    const progress = ((credits * 100) / 60).toFixed(2);
    progressDiv.style.width = progress + "%";
    const studyProgressParagraph = document.getElementById('study-progress-paragraph');
    studyProgressParagraph.innerText+=` - ${credits}EC`;
}
initialiseDashboard();








