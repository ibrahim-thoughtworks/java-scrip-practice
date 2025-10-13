const mineLayout = [];
function layout(length) {
  const starting = 1 + Math.floor(Math.random() * length - 1);
  const end = length ** 2;
  const randomRout = Math.floor(Math.random() * 100) % 2;
  for (let currentLayout = 0; currentLayout < end; currentLayout++) {
    mineLayout.push(0);
  }
  return mineLayout;
}

function setRout(layout) {
  console.log(layout);
  const length = layout.length ** 0.5;
  const start = 1 + Math.floor(Math.random() * length - 1);
  const end = layout.length - (length + Math.random * length);
  let currentRout = start;
  const routList = [1, -1 , length, - length];
  const routLayout = [start];
  while (currentRout < layout.length) {
    currentRout += routList[(Math.floor(Math.random() * 3))];
    routLayout.push(currentRout);
 //   console.log("66",currentRout);
  }
  routLayout.pop();
  console.log(routLayout);
  return routLayout;
}

function replaceRout (layout, routLayout) {
  for (let index = 0; index < routLayout.length; index++) {
    layout[routLayout[index]] = 1;
  }
  return layout;
}

function displayLayout(layout) {
  const length = layout.length ** 0.5;
  for (let index = 0; index < length; index++) {
    const starting = index * length;
    let lineString = "";
    for (let line = starting; line < starting + length; line++) {
      lineString += " " + layout[line];
    }
    console.log(lineString);
    //console.log("\n");
  }
}

function hideElements(layout) {
  const hidArray = ["⬜️", "🟩", "🟥"];
}

function main() {
  const length = 5;
  const firstLayout = layout(length);
  const rout = setRout(firstLayout);
  const replacedRout = replaceRout(firstLayout, rout);
  displayLayout(replacedRout);
  //console.log(replacedRout);
}

main();
