$(document).foundation()

setTimeout(removeClass, 5000);

function removeClass() {
    let h1 = document.querySelector('h1');
    console.log(h1);
    h1.className="";
    let squareGrid = document.querySelector('#square-grid');
    squareGrid.className="grid-container portfolio-index";

}