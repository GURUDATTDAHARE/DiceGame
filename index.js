var imgArr= [
"images/dice1.png",
"images/dice2.png",
"images/dice3.png",
"images/dice4.png",
"images/dice5.png",
"images/dice6.png"
]
var randomNumber1=Math.random();
var randomNumber2=Math.random();
document.getElementById("img1").setAttribute("src",imgArr[Math.floor(randomNumber1*6)]);
document.getElementById("img2").setAttribute("src",imgArr[Math.floor(randomNumber2*6)]);

if(Math.floor(randomNumber1*6)>Math.floor(randomNumber2*6)){
    document.getElementById("heading").innerHTML="Player 1 wins!";

}else if(Math.floor(randomNumber1*6)<Math.floor(randomNumber2*6)){
    document.getElementById("heading").innerHTML="player 2 wins!";
}else{
    document.getElementById("heading").innerHTML="Draw!";
}
