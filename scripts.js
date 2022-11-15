button.addEventListener("click", promptUser);

createGrid();
function createGrid(){
    const container = document.querySelector('#gameBoard');
    for (let i=1; i<257; i++) {
        let div = document.createElement('div');
            div.style.width = "25px";
            div.style.height = "25px";
            div.style.color = "white";
        
        div.addEventListener('mouseover', e => e.target.classList.add(
            'first-color-class'));
        
        document.getElementById("gameBoard").appendChild(div);  
    }
}

function promptUser() {
    let rowTot = prompt("Enter the grid size you would like (2-64)");
        const container = document.querySelector('#gameBoard');
        for (let i=1; i<(rowTot * rowTot); i++) {
        let div = document.createElement('div');
            div.style.width = "25px";
            div.style.height = "25px";
            div.style.color = "white";
        
        div.addEventListener('mouseover', e => e.target.classList.add(
            'first-color-class'));
        
        document.getElementById("gameBoard").appendChild(div);  
}
}