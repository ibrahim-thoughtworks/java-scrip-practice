let mineLayout = [];
let playerLayout = [];
let playerPosition = 0;
let rout = [];
let health = 0;
let bomb = 0;
let level = 2;

function layoutPrint(length) {
  const starting = 1 + Math.floor(Math.random() * length - 1);
  const end = length ** 2;
  const randomRout = Math.floor(Math.random() * 100) % 2;
  for (let currentLayout = 0; currentLayout < end; currentLayout++) {
    mineLayout.push(0);
  }
  return mineLayout;
}

function setRout(layout) {
  const length = layout.length ** 0.5;
  const start = 1 + Math.floor(Math.random() * length - 1);
  const end = layout.length - (length + Math.random * length);
  let currentRout = start;
  const routList = [1, -1, length, - length];
  const routLayout = [start];
  while (currentRout < layout.length) {
    currentRout += routList[(Math.floor(Math.random() * 3))];
    routLayout.push(currentRout);
  }
  routLayout.pop();
  return routLayout;
}

function replaceRout(layout, routLayout) {
  for (let index = 0; index < routLayout.length; index++) {
    layout[routLayout[index]] = 1;
  }
  return layout;
}

function displayLayout(layout) {
  const length = layout.length ** 0.5;
  console.log("\n\n\n\n");
  console.log("\t\t\tHealth:", "❤️".repeat(health), "\n");
  console.log("\t\t\tLevel", level - 1, "\n");
  for (let index = 0; index < length; index++) {
    const starting = index * length;
    let lineString = "";
    for (let line = starting; line < starting + length; line++) {
      lineString += " " + layout[line];
    }
    console.log("\t\t\t", lineString);
  }
}

function hideElements(layout) {
  //console.clear();
  const layoutLength = layout.length;
  const characterPose = ["🚶🏻‍♂️🚶🏻‍♂️‍➡️🧍🏽‍♂️💥"]
  const hidArray = ["💥", "🟩", "⬜️", "🔵"];
  // const hidArray = ["⬜️", "🟩", "🟥","🚶🏻‍♂️🚶🏻‍♂️‍➡️🧍🏽‍♂️💥"];
  const hiddenArray = [];
  //console.log(layout);
  for (let index = 0; index < layoutLength; index++) {
    const currentStep = layout[index];
    hiddenArray[index] = hidArray[currentStep];
  }
  displayLayout(hiddenArray);
}

function copyArray(array) {
  const length = array.length;
  const copiedArray = [];
  for (let index = 0; index < length; index++) {
    copiedArray[index] = array[index];
  }
  return copiedArray;
}

function createPlayerLayout(length) {
  const end = length ** 2;
  for (let index = 0; index < end; index++) {
    playerLayout.push(2);
  }
  playerPosition = rout[0];
  playerLayout[playerPosition] = 3;
}

function result(length) {
  if (!rout.includes(playerPosition)) {
    health--;
    playerLayout[playerPosition] = 0;
    playerPosition = rout[0];
    playerLayout[playerPosition] = 3;
    console.clear();
    hideElements(playerLayout);
    // play(length);
    return;
  }
  if (playerPosition < length ** 2 && playerPosition > (length ** 2) - (length + 1)) {
    console.log("You Won!");
    if (confirm("Wanna to play next?")) {
      bomb = 0;
      mineLayout = [];
      playerLayout = [];
      playerPosition = 0;
      rout = [];
      level++;
      health += level;
      main();
    } else {
      bomb = health;
    }
  }
}

function play(length) {
  while (health !== 0) {
    //console.log(playerPosition);
    const movements = "dasw";
    const playerMove = prompt("d a s w:");
    console.clear();
    playerLayout[playerPosition] = 1;
    const movementList = [1, -1, length, - length];
    playerPosition = playerPosition + movementList[movements.indexOf(playerMove)];
    //console.log(playerPosition,movementList[movements.indexOf(playerMove)],  movements.indexOf(playerMove), playerMove);
    playerPosition < 0 ? playerPosition = length + playerPosition : playerPosition;
    playerPosition > length ** 2 ? playerPosition = playerPosition - length : playerPosition;
    playerLayout[playerPosition] = 3;
    hideElements(playerLayout);
    result(length);
  }
}

function main() {
  console.clear();
  // const length = parseInt(prompt("Enter Length of Row:"));
  const length = level;
  health = health === 0 ? length : health;
  const firstLayout = layoutPrint(length);
  rout = setRout(copyArray(firstLayout));
  // rout.reverse();
  const replacedRout = replaceRout(firstLayout, rout);
  //replacedRout.reverse();
  //hideElements(replacedRout);
  mineLayout = copyArray(replacedRout);
  createPlayerLayout(length);
  //console.log("player Layout");
  hideElements(playerLayout);
  play(length);
  hideElements(replacedRout);
}

main();
