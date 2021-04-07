const container = document.getElementById("container");
const gridSizeInput = document.getElementById('gridSizeInput');

// generate original grid
window.onload = function() {
    setGridSize(16);
    fillGrid(16);
}

// set grid columns
function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

// create grid divs
function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridBlock = document.createElement("div");
      gridBlock.classList = "grid-block";
      gridBlock.addEventListener("mouseover", giveColor);
      container.appendChild(gridBlock);
    }
}

// random color update
function giveColor(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
}


// remove all divs from grid to reset
function resetGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
}

// create new grid
function resizeGrid(newSize) {
    const parsed = parseInt(newSize, 10);
    const rounded = Math.round(parsed)
    if (rounded > 1 && rounded < 65) {
        resetGrid();
        setGridSize(rounded);
        fillGrid(rounded);
    }
}

// resize grid based on input in real time
const inputHandler = function(e) {
    resizeGrid(e.target.value);
}

// event listener to activate function above
gridSizeInput.addEventListener('input', inputHandler)