const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const computerChoisText = document.querySelector("#computerChoise");
const userChoisText = document.querySelector("#choise");
const computerScoreText = document.querySelector("#computerScore");
const userScoreText = document.querySelector("#playerScore");

const choices = ["ножиці", "каміння", "папір"];
let computerScore = 0;
let userScore = 0;
const abc = {}
console.log(typeof abc)
rock.addEventListener("click", onClickrock);
paper.addEventListener("click", onClickpaper)
scissors.addEventListener("click", onClickscissors)

function onClickrock(eventObject) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const userchois = rock.dataset.rock
  console.log(userchois);
  if (computerChoice===choices[0]) {
    userScore += 1 
    computerChoisText.textContent = computerChoice
    userChoisText.textContent = userchois
    computerScoreText.textContent = computerScore
    userScoreText.textContent = userScore
  } else if(userchois===computerChoice) {
    computerChoisText.textContent = computerChoice
    userChoisText.textContent = userchois
    computerScoreText.textContent = computerScore
    userScoreText.textContent = userScore
  } else {
    computerScore += 1
    computerChoisText.textContent = computerChoice
    userChoisText.textContent = userchois
    computerScoreText.textContent = computerScore
    userScoreText.textContent = userScore
  }
}
function onClickpaper(eventObject) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const userchois = paper.dataset.paper
    console.log(userchois);
    if (computerChoice===choices[1]) {
      userScore += 1 
      computerChoisText.textContent = computerChoice
      userChoisText.textContent = userchois
      computerScoreText.textContent = computerScore
      userScoreText.textContent = userScore
    } else if(userchois===computerChoice) {
      computerChoisText.textContent = computerChoice
      userChoisText.textContent = userchois
      computerScoreText.textContent = computerScore
      userScoreText.textContent = userScore
    } else {
      computerScore += 1
      computerChoisText.textContent = computerChoice
      userChoisText.textContent = userchois
      computerScoreText.textContent = computerScore
      userScoreText.textContent = userScore
    }
}
function onClickscissors(eventObject) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const userchois = scissors.dataset.scissors
    console.log(userchois);
    if (computerChoice===choices[2]) {
      userScore += 1 
      computerChoisText.textContent = computerChoice
      userChoisText.textContent = userchois
      computerScoreText.textContent = computerScore
      userScoreText.textContent = userScore
    } else if(userchois===computerChoice) {
      computerChoisText.textContent = computerChoice
      userChoisText.textContent = userchois
      computerScoreText.textContent = computerScore
      userScoreText.textContent = userScore
    } else {
      computerScore += 1
      computerChoisText.textContent = computerChoice
      userChoisText.textContent = userchois
      computerScoreText.textContent = computerScore
      userScoreText.textContent = userScore
    }
}