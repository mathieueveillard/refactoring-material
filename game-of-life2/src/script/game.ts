let rows = 50;
let cols = 50;

let playing = false;

let grid = new Array(rows);
let nextGrid = new Array(rows);

let timer;
let nextGenDelay = 100;



export function initializeGrid() {
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}

export function resetGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = 0;
            nextGrid[i][j] = 0;
        }
    }
}

export function copyAndResetGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = nextGrid[i][j];
            nextGrid[i][j] = 0;
        }
    }
}

export function initialize() {
    createTable();
    initializeGrid();
    resetGrid();
    setupControlButtons();
}

export function createTable() {
    let gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        // Throw error
        console.error("Pas de table");
    }
    let table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = clickCell;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}

export function clickCell() {
    let rowcol = this.id.split("_");
    let row = rowcol[0];
    let col = rowcol[1];

    let classes = this.getAttribute("class");
    if (classes.indexOf("alive") > -1) {
        this.setAttribute("class", "dead");
        grid[row][col] = 0;
    } else {
        this.setAttribute("class", "alive");
        grid[row][col] = 1;
    }

}

export function updateView() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let cell = document.getElementById(i + "_" + j);
            if (grid[i][j] == 0) {
                cell.setAttribute("class", "dead");
            } else {
                cell.setAttribute("class", "alive");
            }
        }
    }
}


export function setupControlButtons() {
    // button to start
    let startButton = document.getElementById('start');
    startButton.onclick = startButtonHandler;

    // button to clear
    let clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonHandler;

    // button to set random initial state
    let randomButton = document.getElementById("random");
    randomButton.onclick = randomButtonHandler;
}

// Generate random living cells
export function randomButtonHandler() {
    if (playing) return;
    clearButtonHandler();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let isalive = Math.round(Math.random());
            if (isalive == 1) {
                let cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "alive");
                grid[i][j] = 1;
            }
        }
    }
}

// clear the grid
export function clearButtonHandler() {
    playing = false;
    let startButton = document.getElementById('start');
    startButton.innerHTML = "Start";
    clearTimeout(timer);

    let cellsList = document.getElementsByClassName("alive");
    let cells = [];
    for (let i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "dead");
    }
    resetGrid();
}

// start/pause/continue the game
export function startButtonHandler() {
    if (playing) {
        playing = false;
        this.innerHTML = "Continue";
        clearTimeout(timer);
    } else {
        playing = true;
        this.innerHTML = "Pause";
        play();
    }
}

// run game
export function play() {
    computeNextGen();

    if (playing) {
        timer = setTimeout(play, nextGenDelay);
    }
}

export function computeNextGen() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            Rules(i, j);
        }
    }

    // copy NextGrid to grid, and reset nextGrid
    copyAndResetGrid();
    // copy all 1 values to "alive" in the table
    updateView();
}

// RULES

export function Rules(row, col) {
    let numNeighbors = countNeighbors(row, col);
    if (grid[row][col] == 1) {
        if (numNeighbors < 2) {
            nextGrid[row][col] = 0;
        } else if (numNeighbors == 2 || numNeighbors == 3) {
            nextGrid[row][col] = 1;
        } else if (numNeighbors > 3) {
            nextGrid[row][col] = 0;
        }
    } else if (grid[row][col] == 0) {
        if (numNeighbors == 3) {
            nextGrid[row][col] = 1;
        }
    }
}

export function countNeighbors(row, col) {
    let count = 0;
    if (row - 1 >= 0) {
        if (grid[row - 1][col] == 1) count++;
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
        if (grid[row - 1][col - 1] == 1) count++;
    }
    if (row - 1 >= 0 && col + 1 < cols) {
        if (grid[row - 1][col + 1] == 1) count++;
    }
    if (col - 1 >= 0) {
        if (grid[row][col - 1] == 1) count++;
    }
    if (col + 1 < cols) {
        if (grid[row][col + 1] == 1) count++;
    }
    if (row + 1 < rows) {
        if (grid[row + 1][col] == 1) count++;
    }
    if (row + 1 < rows && col - 1 >= 0) {
        if (grid[row + 1][col - 1] == 1) count++;
    }
    if (row + 1 < rows && col + 1 < cols) {
        if (grid[row + 1][col + 1] == 1) count++;
    }
    return count;
}



