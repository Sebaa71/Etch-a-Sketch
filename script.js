const container = document.getElementById('container')
const button = document.getElementById('prompt')

function createGrid(cols, rows) {
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', rows);
    for (let c = 0; c < (cols * rows); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', function() {
            cell.classList.add("grid-item-hovered")
        })
        cell.addEventListener('mouseout', function() {
        cell.classList.remove("grid-item-hovered")
        })
    }
}

button.addEventListener('click', function(){
    let much = prompt('How many my boy (E.j 64 = 64x64)', 1)
    if (much <= 100) {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid(much, much)
    } else alert("That's way too much buddy...")  
})
