let iteration = 0;

function sort2(list) {
  const listLength = list.length;
  let index = 0;
  let isChanged = false;
  let changedIndex = 0;

  while (index < listLength - 1) {
    iteration++;
    const firstElement = list[index];
    const secondElement = list[index + 1];

    if (firstElement > secondElement) {
      list[index] = secondElement;
      list[index + 1] = firstElement;
      changedIndex = Math.max(index, changedIndex);
      index = (index === 0 ? changedIndex + 2 : index) - 1;
      isChanged = true;
    } else {
      index = (isChanged ? changedIndex : index) + 1;
      isChanged = false;
    }
  }

  console.log(list);

}


function sort(elementes) {
  const lengthOfElements = elementes.length;

  for (let firstIndex = 0; firstIndex < lengthOfElements; firstIndex++) {
    for (let secIndex = firstIndex + 1; secIndex < lengthOfElements; secIndex++) {
      iteration++;

      if (elementes[firstIndex] > elementes[secIndex]) {
        const temp = elementes[firstIndex];
        elementes[firstIndex] = elementes[secIndex];
        elementes[secIndex] = temp;
      }
    }
  }

  return elementes;
}

function main() {
  const list = [9, 1, 9, 6, 3, 2, 3, 2, 1, 3, 5, 2, 6, 6, 3, 4, 6, 4];
  sort2(list);
  console.log("benchmark:", iteration);

  // // iteration = 0;
  // sort(list);
  // console.log("benchmark:", iteration);
}

main();
