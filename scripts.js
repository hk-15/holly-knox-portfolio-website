/* targets */
const project1 = document.getElementById('project1');
const headingHighlight1 = document.getElementById('heading-highlight1');
const description1 = document.getElementById('description1');
const img1 = document.getElementById('project-img1');
const img2 = document.getElementById('project-img2');

/* event handler functions */
function highlightText(_mouseenter) {
    headingHighlight1.style.display = "block";
};

function unhighlightText(_mouseleave) {
    headingHighlight1.style.display = "none";
};

function showDescription(_onclick) {
    if (description1.style.display === "none") {
        description1.style.display = "block";
        img1.style.display = "block";
        img2.style.display = "block";
    } else {
        description1.style.display = "none";
        img1.style.display = "none";
        img2.style.display = "none";

    }
};

/* DOM events */
project1.onclick = showDescription;

project1.addEventListener('mouseenter', highlightText);

project1.addEventListener('mouseleave', unhighlightText);



