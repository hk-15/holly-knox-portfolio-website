/* targets */
const project1 = document.getElementById('project1');
const headingHighlight1 = document.getElementById('heading-highlight1');
const description1 = document.getElementById('description1');

/* event handler functions */
function highlightText(_mouseenter) {
    headingHighlight1.style.width = "30em";
};

function unhighlightText(_mouseleave) {
    headingHighlight1.style.width = "0";
};

function showDescription(_onclick) {
    description1.hidden="false";
}

 /* DOM events */
 project1.addEventListener('mouseenter', highlightText);

 project1.addEventListener('mouseleave', unhighlightText);

 project1.addEventListener('onclick', showDescription);