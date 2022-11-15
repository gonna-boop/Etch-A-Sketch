// //creates the initial grid for the page, a 16x16 grid of divs that change from white 
// //to black when scrolling over them with a mouse


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

button.addEventListener("click", promptUser);

function promptUser() {
    let rowTot = prompt("Enter the grid size you would like (2-64)");
        const container = document.querySelector('#gameBoard');
        while(gameBoard.lastChild){
            gameBoard.removeChild(gameBoard.lastChild);
        }
        for (let i=1; i<(rowTot * rowTot)+1; i++) {
        let div = document.createElement('div');
            div.style.width = `${400/rowTot}px`;
            div.style.height = `${400/rowTot}px`;
            div.style.color = "white";
        
        div.addEventListener('mouseover', e => e.target.classList.add(
            'first-color-class'));
        
        document.getElementById("gameBoard").appendChild(div);  
}
}