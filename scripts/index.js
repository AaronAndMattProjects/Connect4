const rows = 8;
const cols = 7;

var currentPlayer = '🔴'
let gameData = []
var gameBoard = document.querySelector("#game > #game-board");
var currentPlayerDiv = document.querySelector("#game #current-player");

function setCurrentPlayerText() {
    currentPlayerDiv.innerText = currentPlayer;
}

function tryMove(col) {
    let possibleCells = []
    for (i = 0; i < rows - 1; i++) {
        possibleCells.push(i * rows + col)
    }
    for (let i = possibleCells.length - 1; i >= 0; i--) {
        if (gameData[possibleCells[i]] === '-') {
            gameData[possibleCells[i]] = currentPlayer;
            updateBoard()
            break;
        }
    }

    return true
}

gameBoard.addEventListener('click', e => {
    let index = e.target.getAttribute('data-cell-index')
    if (index === null) {
        return
    }
    if (tryMove(index % (cols + 1))) {
        currentPlayer = currentPlayer === '🔴' ? '🟡' : '🔴'
        setCurrentPlayerText()
    }
})

function updateBoard() {
    gameBoard.innerHTML = ''
    for (i = 0; i < rows * cols; i++) {
        var slotItem = document.createElement("div");
        slotItem.classList.add("slot-item");
        slotItem.setAttribute('data-cell-index', i)
        slotItem.innerText = gameData[i]
        gameBoard.appendChild(slotItem);
    }
}

function setup() {
    setCurrentPlayerText()

    for (i = 0; i < rows * cols; i++) {
        gameData[i] = '-'
    }

    updateBoard()
}

setup()