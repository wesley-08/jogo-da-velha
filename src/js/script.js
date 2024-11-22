let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(index) {
  if (gameBoard[index] || gameOver) return;

  gameBoard[index] = currentPlayer;
  document.getElementById('cell-' + index).innerText = currentPlayer;

  if (checkWinner()) {
    document.getElementById('message').innerText = currentPlayer + ' venceu!';
    gameOver = true;
  } else if (gameBoard.every(cell => cell !== '')) {
    document.getElementById('message').innerText = 'velha!';
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombination.some(combination => {
    const [a, b, c] = combination;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function restartGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  document.getElementById('message').innerText = '';
  for (let i = 0; i < 9; i++) {
    document.getElementById('cell-' + i).innerText = '';
  }
}
