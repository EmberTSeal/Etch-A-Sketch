const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    row = document.createElement('div');
    row.style.height = '20px';
    row.style.display = 'flex';
    row.style.margin = '0'
    row.style.border = 'none'
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.margin = '0';
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.border = '1px solid rgb(0,0,0, 0.2)';
        row.appendChild(div);
    }
    container.appendChild(row);
}

const grids = document.querySelectorAll('.grid');

let toColour = false;

function paint(){
    if(toColour === false ){
        toColour = true;
        grids.forEach( grid => grid.addEventListener('mousemove', colourGrid));
    }
    else{
        toColour = false;
        grids.forEach(grid => grid.removeEventListener('mousemove', colourGrid));
    }
}

function colourGrid(e){
    e.target.classList.add('changed');
}

grids.forEach( grid => grid.addEventListener( 'click', paint));

