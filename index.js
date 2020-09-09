//generat random number fromm 1 to 6//
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 =Math.floor(randomNumber1)+1;


var randomDiceImage = "dice" + randomNumber1 + ".png";   //images form dice1.png to dice6.png//
var randomImageSource1 = "images/"+ randomDiceImage;   //images/dice1.png - dice6.png//


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);          //for 1st image

var randomNumber2 =Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/"+ randomDiceImage;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🏁Player 1 Win!";
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Win!🏁";
}
