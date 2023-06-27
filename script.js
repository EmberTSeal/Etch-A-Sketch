const container = document.querySelector('.container');

//creating grids
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
        row.appendChild(div);
    }
    container.appendChild(row);
}

const grids = document.querySelectorAll('.grid');

let toColour = false;
let rainbowMode = false;

let defaultColor = document.querySelector('#colour').value;

grids.forEach( grid => grid.addEventListener( 'click', paint));

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
    grids.forEach(grid => grid.style.backgroundColor = 'white');
    rainbow.disabled = false;
});

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', function(){
    rainbowMode = true;
    rainbow.disabled = true;
    });

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
    if(rainbowMode === false)
        e.target.style.backgroundColor = defaultColor;
    else{
        e.target.style.backgroundColor = randomColour();
    }
}

function randomColour(){
    let h = Math.floor(Math.random()*360);
    let color = 'hsl(' + h + ', 100%, 50%)';
    return color; 
}

