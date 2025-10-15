const characters = "kzfdjoyuvmi ;nlphcrtwx'gesbaq";
const numberString = "abcdefghij";

function encrypt(text) {
  const englishAlphabetsLength = characters.length;
  const constantIncrementer = 1 + Math.floor(Math.random() * 100);
  let incrementer = constantIncrementer;
  const textLength = text.length;
  let encryptedText = "";

  for (let index = 0; index < textLength; index++) {
    const textIndex = characters.indexOf(text[index]);
    const newTextIndex = (textIndex + incrementer) % englishAlphabetsLength;
    encryptedText += characters[newTextIndex];
    incrementer++;
  }
  console.log("hii", encryptedText, constantIncrementer, incrementer);
  return encryptedText + "." + incrementer;
}
function decrypt(text) {
  const englishAlphabetsLength = characters.length;
  const textLength = text.length;
  const constantIncrementer = text.slice(text.indexOf(".") + 1, textLength);
  let encryptedText = text.slice(0, text.indexOf("."));
  console.log("const", constantIncrementer, "enc", encryptedText);
  // let incrementer = constantIncrementer;

  // for (let index = 0; index < textLength; index++) {
  //   const textIndex = characters.indexOf(text[index]);
  //   const newTextIndex = (textIndex + incrementer) % englishAlphabetsLength;
  //   encryptedText += characters[newTextIndex];
  //   incrementer++;
  // }
  // console.log("hii", encryptedText, constantIncrementer, incrementer);
  // return encryptedText + "." + incrementer;
}

function main() {
  const userText = prompt("Input a text:");
  const encryptedText = encrypt(userText);
  console.log(encryptedText);
  const decryptedText = decrypt(encryptedText);
  return encryptedText;
}

main();
