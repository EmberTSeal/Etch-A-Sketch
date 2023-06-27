const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    row = document.createElement('div');
    row.style.height = '21px';
    row.style.display = 'flex';
    row.style.margin = '0'
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.style.margin = '0';
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.backgroundColor = 'red';
        div.style.border = '0.5px solid black';
        row.appendChild(div);
    }
    container.appendChild(row);
}