const dino = document.querySelector(".dino")
const cactus = document.querySelector(".cactus")
const gameOver = document.querySelector(".gameover")
let jumpDino = false
document.addEventListener("keydown", jump )
function jump(i) {
console.log(i.code)
if (i.code === "Space" && jumpDino === false) {
    dino.classList.add("dinojump")
    jumpDino = true
    setTimeout(() => {
    dino.classList.remove("dinojump")
    jumpDino = false
    }, 1000);
}
} 

function gameover () {
    let dinoBottom = Number.parseInt(window.getComputedStyle(dino).bottom)
    let cactusLeft = Number.parseInt(window.getComputedStyle(cactus).left)
    let cactusRight = Number.parseInt(window.getComputedStyle(cactus).right)
    gameOver.style.visibility = "hidden"
    if (cactusLeft >= 0 && cactusLeft <= 88 && dinoBottom <= 70) {
      cactusRight = 0
      gameOver.style.visibility = "visible"
    }
    console.log(cactusLeft >= 0 && cactusLeft <= 88 && dinoBottom <= 70)
    console.log(cactusLeft >= 0)
    console.log(cactusLeft <= 88)
    console.log(dinoBottom <= 70)
}

setInterval(() => {
    gameover()
}, 100);
