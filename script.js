const container = document.querySelector("#container");

window.addEventListener("load", setOriginalGrid);

function setOriginalGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridBlock = document.createElement("div");
      gridBlock.classList = "grid-block";
      container.appendChild(gridBlock);
    }
  }

/*

function makeDivs(v) { 
    let container = document.getElementById("container");
    
    for(let i = 0; i < v; i++) { 
      let row = document.createElement("div"); 
      row.className = "row";

      for (let x = 1; x <= v; x++) { 
          let cell = document.createElement("div"); 
          cell.className = "gridsquare";
          row.appendChild(cell); 
      } 
      container.appendChild(row); 
    } 
    document.getElementById("code").innerText = e.innerHTML;
}
*/