var randomNumber1 = Math.floor(Math.random() * 5) + 1;
var randomNumber2 = Math.floor(Math.random() * 5) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) { //case: player1 wins
    document.querySelector("h1").innerText = "🚩Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) { //case: Player2 wins
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩"
} else { //case: draw
    document.querySelector("h1").innerText = "Draw!"
}



