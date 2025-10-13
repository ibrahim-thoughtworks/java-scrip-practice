let currentScore = 0;
let botScore = 0;
let userScore = 0;
let isBatting = true
let state = true;
let isFirstPlay = true;
let isEnd = false;

function playerShoot() {
  console.log("\n\n\n\n\n\n\n\n");
  const status = isBatting ? "Batting🏏" : "Bowling☄️";
  console.log("\t\t\t\t\t",status);
  const userInput = parseInt(prompt("\t\t\t\t     Shoot Number:"));
  return userInput > 0 && userInput < 7 ? userInput : 1;
}

function computerShoot() {
  return 1 + Math.floor(Math.random() * 5);
}

function checkWicket(pcScore, playerScore) {
  const isWicket = pcScore === playerScore;
  if (isWicket) {
    isEnd = !isFirstPlay;
    isFirstPlay = !isFirstPlay;
    if (isBatting) {
      userScore = currentScore;
    } else {
      botScore = currentScore;
    }
  }
  return isWicket;
}

function clourNumber(number) {
  const scores = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
  let stringNumber = number + "";
  const stringNumberLength = stringNumber.length;

  for (let index = 0; index < 10; index++) {
    stringNumber = stringNumber.replace(index + "", scores[index] + " ");
  }
  return stringNumber;
}

function displayWinOrLose(){
  if (isEnd ) {
    if (userScore === botScore) {
      console.log(" Match Draw ⚠️", userScore, "/", botScore, "\n\n\n");
    } else if (userScore > botScore) {
      console.log(" YOU WON 🏆🏆🏆🏆", userScore, "/", botScore, "\n\n\n");
    } else {
  
      console.log("YOU LOSE ‼️", userScore,"/", botScore, "\n\n\n");
    }
    if (!confirm("Should Stop?")) {
      play();
    }
    return false;
  }
  return true;
}

function displayResult(isWicket, score, playerScore, computerScore) {
  console.clear();
//  const status = isBatting ? "Batting🏏" : "Bowling☄️";

  if (isWicket) {
    console.log(playerScore, "  :  ", computerScore);
    console.log("OUT !!!");
    console.log(clourNumber(score));
    currentScore = 0;
    return displayWinOrLose();
  } else {
    if (!isFirstPlay) {
      const score = userScore === 0 ? botScore : userScore;
      console.log("Opponent Score:", score);
      if (currentScore > score) {
        isEnd = true;
        isBatting ? userScore = currentScore : botScore = currentScore;
        return displayWinOrLose();
      }
    }
    // console.log(status);
    console.log(playerScore, "  :  ", computerScore);
    console.log(clourNumber(score));
    return true;
  }
}

function chooseBat(x = 1) {
  const randomeNumber1 = 1 + Math.floor(Math.random() * 9);
  return x === randomeNumber1 % 2;
}

function clearAll() {
  currentScore = 0;
  botScore = 0;
  userScore = 0;
  isBatting = true
  state = true;
  isFirstPlay = true;
  isEnd = false;
}

function play() {
  console.clear();
  clearAll();
  let shouldContinue = true;
  isBatting = chooseBat();
  // state = isBatting ? "Batting🏏" : "Bowling☄️";
  // console.log(state);
  
  while (shouldContinue) {
    const playerScore = playerShoot();
    const computerScore = computerShoot();
    const wicket = checkWicket(computerScore, playerScore);
    currentScore = wicket ? currentScore : currentScore + playerScore;
    shouldContinue = displayResult(wicket, currentScore, playerScore, computerScore);
    //firstPlay = firstPlay === true && wicket === true ? false : true;
    isBatting = wicket === true ? !isBatting : isBatting;
  }
  return false;
}

play();

