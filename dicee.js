let player1 = Math.floor(Math.random()*6) + 1;

let imgplayer1 =`./images/dice${player1}.png`;

let player2 = Math.floor(Math.random()*6) + 1;

let imgplayer2 =`./images/dice${player2}.png`;

console.log(imgplayer1)
console.log(imgplayer2)

let dado1 = document.querySelector(".img1")
dado1.setAttribute("src", imgplayer1)

let dado2 = document.querySelector(".img2")
dado2.setAttribute("src",imgplayer2)

if (player1 > player2) {
    document.querySelector("h1").innerText = "🚩 Gano el player1"   
}
else if (player1 == player2){
    document.querySelector("h1").innerText = "Empate"
}
else {
    document.querySelector("h1").innerText = "Gano el player2 🚩"
}






















































