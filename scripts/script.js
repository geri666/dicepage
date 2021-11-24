const imgPath = "./img/*.png";
const newDieImg = '<img src="./img/1.png" id="diceImg*">';
var dice = 1;

function rollMultiple() {
  for (var i = 1; i < dice + 1; i++) {
    var eyes = getRandomInt(6);
    document
      .getElementById("diceImg" + i)
      .setAttribute("src", imgPath.replace("*", eyes));
  }
}

function addDie() {
  if (dice >= 14) {
    alert("can't add any more dice");
  } else {
    dice++;
    document.getElementById("diceContainer").innerHTML += newDieImg.replace(
      "*",
      dice
    );
  }
}

function removeDie() {
  if (dice < 2) {
    alert("can't delete the last die");
  } else {
    dice--;
    document
      .getElementById("diceContainer")
      .removeChild(document.getElementById("diceImg" + (dice + 1)));
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

$(document).ready(function () {
  $("#rollDice").click(function () {
    rollMultiple();
  });

  $("#removeDie").click(function () {
    removeDie();
  });

  $("#addDie").click(function () {
    addDie();
  });
});
