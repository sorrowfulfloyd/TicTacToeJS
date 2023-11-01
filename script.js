const boxes = [];

for (let i = 0; i <= 8; i++) {
  boxes[i] = document.querySelector(`.box.b${i}`);
}

const boardModule = (function () {
  const board = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: ""
  }

  function appendToBoxes() {
    for (i in boxes) {
      boxes[i].innerText = board[i];

    }
  }


  return { board, appendToBoxes };
})()

function createPlayer() {
  let moves = 0;
  let lastMove = "X";
  return {
    playMove() {
      moves++;
      console.log(moves);
      if (moves === 9) location.reload();
      switch (lastMove) {
        case "X":
          lastMove = "O";
          return "X";
        case "O":
          lastMove = "X";
          return "O";
        default:
          break;
      }
    }
  }
}



const play = createPlayer()
const board = boardModule.board;

for (let i = 0; i < boxes.length; i++) {

  boxes[i].addEventListener('click', () => {
    if (!boxes[i].innerText) {
      let move = play.playMove();



      boxes[i].innerText += move;
      board[i] = move;



      const winningCombinations = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
      ];

      for (const combo of winningCombinations) {

        const [a, b, c] = combo;

        if (board[a] === "X" && board[b] === "X" && board[c] === "X") {
          location.reload();
          break;
        } else if (board[a] === "O" && board[b] === "O" && board[c] === "O") {
          location.reload();
          break;
        }
      }

    }
  })
}



window.addEventListener('load', () => {
  boardModule.appendToBoxes();
}, false)