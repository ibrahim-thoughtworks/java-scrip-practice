let numberOfIteration = 0;

function sort(elementes) {
  const lengthOfElements = elementes.length;
  
  for (let firstIndex = 0; firstIndex < lengthOfElements; firstIndex++) {
    for (let secIndex = firstIndex; secIndex < lengthOfElements; secIndex++) {
      numberOfIteration++;

      if (elementes[firstIndex] > elementes[secIndex]) {
        const temp = elementes[firstIndex];
        elementes[firstIndex] = elementes[secIndex];
        elementes[secIndex] = temp;
      }
    }
  }

  return elementes;
}

function sumOf(array) {
  const arrayLength = array.length;
  let sum = 0;

  for (let index = 0; index < arrayLength; index++) {
    sum += array[index];
  }

  return sum;
}

function getStandardDeviation(array1, averageValue) {
  const standardDeviation = [];
  const arrayLength = array1.length;

  for (let index = 0; index < arrayLength; index++) {
    standardDeviation[index] = array1[index] - averageValue;
  }

  return standardDeviation;
}

function calculateConsistency(standardDeviation) {
  const totalDeviation = standardDeviation.length;
  let consistency = 0;

  for (let index = 0; index < totalDeviation; index++) {
    consistency += standardDeviation[index] ** 2;
  }

  return consistency / totalDeviation;
}

function print(sortedList, sum, average, standardDeviation) {
  console.log("\n\n\nsorted:\n", sortedList);
  // console.log("Sum : ", sum);
  console.log("average : ", average);
  // console.log("standard deviation:\n", standardDeviation);
}

function getConsistency(list) {
  numberOfIteration = 0;
  const sortedList = sort(list.slice());
  const sum = sumOf(sortedList);
  const average = sum / sortedList.length;
  const standardDeviation = getStandardDeviation(sortedList, average);

  print(sortedList, sum, average, standardDeviation);
  return calculateConsistency(standardDeviation);
}

function consistencyManager(list) {
  const consistency = getConsistency(list);
  console.log("\nconsistency:", consistency);
  console.log("Bench Mark = ", numberOfIteration);
}

function generateList(length, highestValue) {
  const list = [];

  for (let index = 0; index < length; index++) {
    list.push(Math.floor(Math.random() * highestValue))
  }

  return list;
}

function main() {
  const length = 10;
  const highestValue = 100;
  // const list1 = generateList(length, highestValue);
  // const list2 = generateList(length, highestValue);
  const list1 = [-10, 0, 10];

  consistencyManager(list1);
  // consistencyManager(list2);
}

main();


