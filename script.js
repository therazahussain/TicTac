let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let box_buttons = document.querySelectorAll(".btn");
let boxes = document.querySelector(".box-container");
let winnerMsgContainer = document.querySelector(".winner-msg-container");
let winner_msg = document.querySelector(".winner");

let heading = document.querySelector("h1");

let total_box = 0;

let player = 1;
let option = "X";

let winnerPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let box_button of box_buttons) {
  box_button.addEventListener("click", (e) => {
    box_button.innerText = option;

    if (option === "X") {
      option = "O";
      player = 2;
    } else {
      option = "X";
      player = 1;
    }
    box_button.disabled = true;

    total_box++;

    checkWinner();
  });
}

const checkWinner = () => {
  for (positions of winnerPositions) {
    let p1 = boxes.children[positions[0]].innerText;
    let p2 = boxes.children[positions[1]].innerText;
    let p3 = boxes.children[positions[2]].innerText;

    if (p1 !== "" && p2 !== "" && p3 !== "" && p1 === p2 && p2 === p3) {
      winnerMsgContainer.classList.remove("hide");
      winner_msg.innerText = `Congratulation player with ${p1} won the game`;
    } else {
      if (total_box === 9) {
        winner_msg.innerText = `Match Draw`;
        winnerMsgContainer.classList.remove("hide");
      }
    }
  }
};

const resetButtons = () => {
  for (let box_button of box_buttons) {
    box_button.innerText = "";
    box_button.disabled = false;
  }
  winnerMsgContainer.classList.add("hide");
};

reset.addEventListener("click", () => {
  resetButtons();
});

newGame.addEventListener("click", () => {
  resetButtons();
});
