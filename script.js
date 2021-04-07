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