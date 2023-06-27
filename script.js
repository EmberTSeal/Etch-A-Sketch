const container = document.querySelector('.container');
const button10 = document.querySelector('#size10');
const button25 = document.querySelector('#size25');
const button50 = document.querySelector('#size50');
const clearBtn = document.querySelector('#clear');

let toColour = false;
let rainbowMode = false;

let colourInput = document.querySelector('#colour');
let defaultColour = colourInput.value;
const rainbow = document.querySelector('#rainbow');

//default:
let gridCount = 10;
let gridSize = 500 / gridCount;
let grids;
createGrid(gridCount, gridSize);

button10.addEventListener('click', function () {
    clearGrids();
    gridCount = 10;
    gridSize = 500 / gridCount;
    createGrid(gridCount, gridSize);
});

button25.addEventListener('click', function () {
    clearGrids();
    gridCount = 25;
    gridSize = 500 / gridCount;
    createGrid(gridCount, gridSize);
});


button50.addEventListener('click', function () {
    clearGrids();
    gridCount = 50;
    gridSize = 500 / gridCount;
    createGrid(gridCount, gridSize);
});


colourInput.addEventListener('change', colourInputHandler);

//clearing existing grids
function clearGrids() {
    container.replaceChildren();
}

//creating grids
function createGrid(gridCount, gridSize) {
    for (let i = 0; i < gridCount; i++) {
        row = document.createElement('div');
        row.style.height = `${gridSize}px`;
        row.style.display = 'flex';
        row.style.margin = '0'
        row.style.border = 'none'
        for (let j = 0; j < gridCount; j++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            div.style.margin = '0';
            div.style.width = `${gridSize}px`;
            div.style.height = `${gridSize}px`;
            div.style.border = '0.2px solid rgb(0,0,0, 0.5)';
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    callPaintFn();
}

function callPaintFn(){
    grids = document.querySelectorAll('.grid');
    rainbow.disabled = false;
    rainbowMode = false;
    grids.forEach(grid => grid.addEventListener('click', paint));
}

clearBtn.addEventListener('click', () => {
    grids.forEach(grid => grid.style.backgroundColor = 'white');
    rainbow.disabled = false;
});

rainbow.addEventListener('click', function () {
    rainbowMode = true;
    rainbow.disabled = true;
});

function paint() {
    if (toColour === false) {
        toColour = true;
        grids.forEach(grid => grid.addEventListener('mousemove', colourGrid));
    }
    else {
        toColour = false;
        grids.forEach(grid => grid.removeEventListener('mousemove', colourGrid));
    }
}

function colourGrid(e) {
    if (rainbowMode === false)
        e.target.style.backgroundColor = defaultColour;
    else {
        e.target.style.backgroundColor = randomColour();
    }
}

function randomColour() {
    let h = Math.floor(Math.random() * 360);
    let color = 'hsl(' + h + ', 100%, 50%)';
    return color;
}

function colourInputHandler(){
    defaultColour = colourInput.value;
}

