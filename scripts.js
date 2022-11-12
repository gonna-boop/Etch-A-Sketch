const container = document.querySelector('#gameBoard');

let rowTot = 16;
let cellTot = rowTot * rowTot;

for (let i=1; i<257; i++) {
    let div = document.createElement('div');
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.color = "white";
    
    div.addEventListener('mouseover', e => e.target.classList.add(
        'first-color-class'));
    
    document.getElementById("gameBoard").appendChild(div);  
}