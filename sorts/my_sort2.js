let iteration = 0;
function exchange(list, index, element) {
  index -= 2;

  while (list[index] > element) {
    iteration++;
    index -= 2;
  }

  if (list[index + 1] <= element) {
    index++;
  }
  // console.log("return", index);

  return index >= -1 ? index : -1;
}

function sort3(list) {
  const listLength = list.length;
  let index = 1;

  while (index < listLength) {
    iteration++;
    const firstElement = list[index - 1];
    const secondElement = list[index];

    // console.log("in", index, firstElement, secondElement);

    if (firstElement > secondElement) {
      const rIndex = exchange(list, index, secondElement) + 1;

      for (let lindex = index; lindex > rIndex; lindex--) {
        const temp = list[lindex];
        list[lindex] = list[lindex - 1];
        list[lindex - 1] = temp;
      }
    }
    // console.log(list);
    index++;
  }

  console.log(list);
}

function generateList(length, highestValue) {
  const list = [];

  for (let index = 0; index < length; index++) {
    list.push(Math.floor(Math.random() * highestValue))
  }

  return list;
}

function sort(elementes) {
  const lengthOfElements = elementes.length;

  for (let firstIndex = 0; firstIndex < lengthOfElements; firstIndex++) {
    for (let secIndex = firstIndex; secIndex < lengthOfElements; secIndex++) {
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

const list = [1, 2, 4, 3, 5, 6, 2, 4, 7, 10, 86, 494, 4, 45, 2, 4];
// const list = generateList(100000, 100);

console.log("list generated");
sort3(list);
console.log("banchmark:", iteration);

// iteration = 0;

// console.log(sort(list));
// console.log("benchmark:", iteration);

