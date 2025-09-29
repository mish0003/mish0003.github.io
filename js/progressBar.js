let credits = 0;
const creditElements = document.getElementsByClassName("credit");
const gradeElements = document.getElementsByClassName("grade");
for (let i = 0; i < creditElements.length; i++) {
    if (gradeElements[i].innerText >= 5.5) {
        credits += parseFloat(creditElements[i].innerText);
    }
}
const progressDiv = document.getElementById("progress");
const progress = ((credits * 100) / 60).toFixed(2);
progressDiv.style.width = progress + "%";





