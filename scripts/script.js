const imgPath = "./img/*.png";
const newDieImg = '<div id="singleDie*" class="nextToEachOther"><img src="./img/1.png" id="diceImg*" onClick="reply_click(this.id)"></div>';
var dice = 1;
var clickedImg;

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
        document.getElementById("diceContainer").innerHTML += newDieImg.replaceAll(
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
            .removeChild(document.getElementById("singleDie" + (dice + 1)));
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function reply_click(clicked_id) {
    animatedRoll(clicked_id);
}

function animatedRoll(name) {
    clickedImg = document.getElementById(name);
    animate();
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const animate = async() => {
    var size = 200;

    for (var i = 0; i < 7; i++) {
        clickedImg.style.width = size - 30 + 'px';
        size = size - 30;
        await sleep(10);
    }

    rollCurrent();

    for (var i = 0; i < 7; i++) {
        clickedImg.style.width = size + 30 + 'px';
        size = size + 30;
        await sleep(10);
    }


}

function rollCurrent() {
    var eyes = getRandomInt(6);
    clickedImg.setAttribute("src", imgPath.replace("*", eyes));
}

$(document).ready(function() {
    $("#rollDice").click(function() {
        rollMultiple();
    });

    $("#removeDie").click(function() {
        removeDie();
    });

    $("#addDie").click(function() {
        addDie();
    });
});