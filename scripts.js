for (let i=0; i<16; i++) {
    const container = document.querySelector('#gameBoard');
    let div = document.createElement('div');
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.color = "white";
    
    div.addEventListener('mouseover', e => e.target.classList.add(
        'first-color-class'));
    
    document.getElementById("gameBoard").appendChild(div);  
}