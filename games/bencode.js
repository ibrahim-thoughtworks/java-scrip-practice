const NUMBER = "number";
const STRING = "string";

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
    bencryptedList.push(encode(list[index]));
  }

  return "l" + bencryptedList.join("") + "e";
}

function encode(data) {
  const type = typeof (data);

  switch (type) {
    case NUMBER:
      return bencodeNumber(data);
    case STRING:
      return bencodeString(data);
  }

  if (Array.isArray(data)) {
    return bencodeList(data);

  }
}

function decodeNumber(data, index) {
  const endIndex = data.indexOf("e", index);
  const decodedNumber = parseInt(data.slice(index + 1, endIndex))
  return [decodedNumber, endIndex];
}

function decodeString(data, index) {
  const lastIndex = parseInt(data[index]) + index + 2;
  const decodedString = data.slice(index + 2, lastIndex);
  return [decodedString, lastIndex - 1];
}

function unBencodeList(data, index) {
  const dataLength = data.length;
  const decodedLIst = decode(data.slice(index + 1, dataLength));
  const endIndexOfList = decodedLIst[1] + index + 1;
  return [decodedLIst[0], endIndexOfList];
}

function decodeOtherTypes(typeOfData, data, index) {
  if (typeOfData === "i") {
    return decodeNumber(data, index);
  } else if (typeOfData === "l") {
    const returningData = unBencodeList(data, index);
    return [returningData[0], returningData[1]];
  } else {
    return decodeString(data, index);
  }
}

function decode(data) {
  const dataLength = data.length;
  const decodedData = [];
  let index = 0;

  while (index < dataLength) {
    const typeOfData = data[index];

    if (typeOfData === "e") {
      return [decodedData, index];
    }

    const returningData = decodeOtherTypes(typeOfData, data, index);
    decodedData.push(returningData[0]);
    index = returningData[1] + 1;
  }

  return decodedData.length === 1 ? decodedData[0] : decodedData;
}

function msg(descr, actRes, expRes, i1 = "", i2 = "") {
  const input1 = "Encoding Data";                          // inputs name
  const input2 = "";                         // inputs name
  const isSameResult = (actRes + "" === expRes + "");
  const symbol = isSameResult ? "✅" : "❌";
  let inputs = `\t${input1}: ${i1} \n\t${input2}: ${i2}`; //inputs Section:
  let inputPlace = symbol + descr;
  inputPlace += (isSameResult ? "" : "\n" + inputs);
  let outputFragment = "\n\n\tgot: " + actRes;
  outputFragment += "\n\texpected: " + expRes;
  const message = isSameResult ? inputPlace : inputPlace + outputFragment;
  console.log(message + "\n\n");
}

function encodeTesting(descr, i1, expRes) {
  const result = encode(i1);
  console.log(result);
  msg(descr, result, expRes, i1);
}

function encodeTestCases() {
  console.log("Encoding \n ----------------\n")
  encodeTesting("Number", 123, "i123e");
  encodeTesting("String", "kidding", "7:kidding");
  encodeTesting("String", "kidding", "7:kidding");
  encodeTesting("Number list", [1, 2, 3], "li1ei2ei3ee");
  encodeTesting("Number and string list", [1, 2, 3, "Badusha"], "li1ei2ei3e7:Badushae");
  encodeTesting("Nested list", [1, 2, 3, ["Badusha"]], "li1ei2ei3el7:Badushaee");
  encodeTesting("Nested list", [1, 2, 3, ["Badusha"], 567], "li1ei2ei3el7:Badushaei567ee");
}

encodeTestCases();

function decodeTesting(descr, expRes, i1) {
  const result = decode(i1);
  console.log(result);
  msg(descr, result, expRes, i1);
}

function decodeTestCases() {
  console.log("Decoding \n ----------------\n")
  decodeTesting("Number", 123, "i123e");
  decodeTesting("String", "kidding", "7:kidding");
  decodeTesting("String", "kidding", "7:kidding");
  decodeTesting("Number list", [1, 2, 3], "li1ei2ei3ee");
  decodeTesting("Number and string list", [1, 2, 3, "Badusha"], "li1ei2ei3e7:Badushae");
  decodeTesting("Nested list", [1, 2, 3, ["Badusha"]], "li1ei2ei3el7:Badushaee");
  decodeTesting("Nested list", [1, 2, 3, ["Badusha"], 567], "li1ei2ei3el7:Badushaei567ee");
  decodeTesting("empty list", [], "le");
}

decodeTestCases();
