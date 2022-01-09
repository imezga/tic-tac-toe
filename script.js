const cells = document.querySelectorAll('.cell');
const heading = document.getElementById('heading');
const winHeading = document.getElementById('win-heading');
const restartBtn = document.getElementById('restart');
const newGame = document.querySelector('.new-game');

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function switchPlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function checkWin(index) {
    for (let i = 0; i < winningCombos.length; i++) {
        const winCombo = winningCombos[i];
        const a = board[winCombo[0]];
        const b = board[winCombo[1]];
        const c = board[winCombo[2]];
        if (
            cells[index].innerHTML == a &&
            cells[index].innerHTML == b &&
            cells[index].innerHTML == c
        ) {
            winHeading.innerHTML = `${currentPlayer}'s won!`;
            newGame.style.animation = 'fadeIn .5s ease-in';
            newGame.style.display = 'flex';
        } else if (!board.includes('')) {
            winHeading.innerHTML = "I'ts a Draw!";
            newGame.style.animation = 'fadeIn .5s ease-in';
            newGame.style.display = 'flex';
        }
    }
}

cells.forEach(function (cell, index) {
    cell.addEventListener('click', function () {
        if (cell.innerHTML == 'X' || cell.innerHTML == 'O') {
            return;
        } else {
            cell.innerHTML = currentPlayer;
            board[index] = currentPlayer;
            checkWin(index);
            switchPlayer();
        }
        heading.innerHTML = `${currentPlayer}'s turn!`;
    });
});

restartBtn.addEventListener('click', function () {
    currentPlayer = 'X';
    heading.innerHTML = `${currentPlayer}'s turn!`;
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(function (cell) {
        cell.innerHTML = '';
    });
    newGame.style.animation = 'fadeOut 1s';
    setTimeout(function () {
        newGame.style.display = 'none';
    }, 1000);
});
