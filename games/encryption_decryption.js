const characters = "kzfdjoyuvmi ;nlphcrtwx'gesbaq";
const numberString = "abcdefghij";

function encrypt(text) {
  const englishAlphabetsLength = characters.length;
  const constantIncrementer = 1 + Math.floor(Math.random() * englishAlphabetsLength);
  let incrementer = constantIncrementer;
  const textLength = text.length;
  let encryptedText = "";
  console.log(text,textLength);

  for (let index = 0; index < textLength; index++) {
    const textIndex = characters.indexOf(text[index]);
    const newTextIndex = (textIndex + incrementer) % englishAlphabetsLength;
    encryptedText += characters[newTextIndex];
    console.log(textIndex,characters[textIndex],newTextIndex,characters[newTextIndex],"incre:",incrementer);
    incrementer++;
  }
  console.log("hii", encryptedText, constantIncrementer, incrementer);
  return encryptedText + "." + incrementer;
}
function decrypt(text) {
  const englishAlphabetsLength = characters.length;
  let incrementer = text.slice(text.indexOf(".") + 1, text.length);
  let encryptedText = text.slice(0, text.indexOf("."));
  const textLength = encryptedText.length;
  console.log("const", incrementer, "enc", encryptedText);
	let decryptedText = "";
	incrementer -= textLength;
	for (let index = 0; index < textLength; index++) {
		const textIndex = characters.indexOf(text[index]);
		const newTextIndex = Math.abs(englishAlphabetsLength + textIndex - incrementer) % englishAlphabetsLength;
		decryptedText += characters[newTextIndex];
		console.log(textIndex,characters[textIndex],newTextIndex,characters[newTextIndex],"inc",incrementer);
		incrementer++;
	}
	console.log(decryptedText);
}

function main() {
  const userText = prompt("Input a text:");
  const encryptedText = encrypt(userText);
  console.log(encryptedText);
  const decryptedText = decrypt(encryptedText);
  return encryptedText;
}

main();
