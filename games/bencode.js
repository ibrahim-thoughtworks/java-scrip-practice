function bencodeNumber(number) {
  return "i" + number + "e";
}

function bencodeString(string) {
  const stringLength = string.length;
  return stringLength + ":" + string;
}

function bencodeList(list) {
  const listLength = list.length;
  const bencryptedList = [];

  for (let index = 0; index < listLength; index++) {
    const type = typeof (data);
    bencryptedList.push(encode(list[index]));
  }

  return "l" + bencryptedList.join("") + "e";
}

function encode(data) {
  const type = typeof (data);

  switch (type) {
    case "number":
      return bencodeNumber(data);
    case "string":
      return bencodeString(data);
    case "object":
      return bencodeList(data);
  }

  console.log(type);
}

function unBencodeNumber(data, index) {
  const endIndex = data.indexOf("e", index);
  return [parseInt(data.slice(index + 1, endIndex)), endIndex];
}

function unBencodeString(data, index) {
  const lastIndex = parseInt(data[index]) + index + 2;
  return [data.slice(index + 2, lastIndex), lastIndex - 1];
}

function unBencodeList(data, index) {
  const decodedLIst = [];
  const dataLength = data.length;

  for (let currentIndex = index; currentIndex < dataLength; currentIndex++) {

  }
  return [decode(data.slice(index + 1, dataLength - 1)), dataLength - 1];
}

function decode(data) {
  const dataLength = data.length;
  const decodedData = [];
  let dataCount = 0;

  for (let index = 0; index < dataLength; index++) {
    const typeOfData = data[index];
    let returningData = [];

    if (typeOfData === "i") {
      returningData = unBencodeNumber(data, index);
    } else if (typeOfData === "l") {
      returningData = unBencodeList(data, index);
      returningData = [returningData[0], returningData[1]];
    } else {
      returningData = unBencodeString(data, index);
    }
    decodedData.push(returningData[0] === undefined ? "" : returningData [0]);
    index = returningData[1];
    dataCount++;
  }

  return decodedData.length === 1 ? decodedData[0] : decodedData;
}

console.log(encode(123));          // → "i123e"
console.log(decode("i123e"));      // → 123

console.log(encode("hello"));      // → "5:hello"
console.log(decode("5:hello"));    // → "hello"

console.log(encode([1, "two", ["three", 4]])); // → "li1e3:twol5:threei4eee"
console.log("dec", decode("li1e3:twol5:threei4eee")); // → [1, "two", ["three", 4]]

console.log(encode([]));           // → "le"
console.log(decode("le"));         // → []

// Edge Cases (you should consider these in your implementation)
console.log(encode(0));            // → "i0e"
console.log(decode("i0e"));        // → 0
console.log(encode(""));           // → "0:"
console.log(decode("0:"));         // → ""
