const characters = 
	"kzfdjoyuvmi ;nlphcrtwx'gesbaq:KFWUBTRVLOJAHZXIMYEGPQSDNC?/.>,<|}]{[+=_-)" +
  "(*&^%$#@!" + 
	'"\\' +
	"1325467098";
;
const numberString = "abcdefghij";

function encrypt(text) {
  const engLetterSize = characters.length;
  const constantIncrementer = 1 + Math.floor(Math.random() * engLetterSize);
  let incrementer = constantIncrementer;
  const textLength = text.length;
  let encryptedText = "";

  for (let index = 0; index < textLength; index++) {
    const textIndex = characters.indexOf(text[index]);
    const newTextIndex = (textIndex + incrementer) % engLetterSize;
    encryptedText += characters[newTextIndex];
    incrementer++;
  }
  return encryptedText + "." + incrementer;
}

function decryptLetters(incrementer, textLength, text, decryptedText) {
  const engLetterSize = characters.length;
  incrementer -= textLength;

  for (let index = 0; index < textLength; index++) {
    const textIndex = characters.indexOf(text[index]);
    let newIndex = (engLetterSize + textIndex - incrementer) % engLetterSize;
    newIndex = newIndex < 0 ? engLetterSize + newIndex : newIndex;
    decryptedText += characters[newIndex];
    incrementer++;
  }
  
  return decryptedText;
}

function decrypt(text) {
	const incrementerText = text.slice(text.lastIndexOf(".") + 1, text.length);
  let incrementer = parseInt(incrementerText);
  let encryptedText = text.slice(0, text.lastIndexOf("."));
  const textLength = encryptedText.length;
	let decryptedText = "";
	decryptedText = decryptLetters(incrementer, textLength, text, decryptedText);

	return decryptedText;
}

function dotManager(text) {
  const pointIndex = text.lastIndexOf(".");
  let numberText = text.slice(pointIndex,text.length);
  const numberTextSize = numberText.length - 1;
  const balanceText = text.slice(0, pointIndex);
  let decryptedNumber = "";
  const decryptedNumberSize = numberString[numberTextSize];

  for (let index = 1; index <= numberTextSize; index++) {
    decryptedNumber += numberString[parseInt(numberText[index])];
  }

  return balanceText + decryptedNumber + decryptedNumberSize;
}

function encryptionManager(){
	const encryptionCount = 1 + Math.floor(Math.random() * 8);
	let encryptedText = prompt("Input a text to encrypt:");

	for (let currentCount = 0; currentCount < encryptionCount; currentCount++) {
		encryptedText = encrypt(encryptedText);
	}

  encryptedText = dotManager(encryptedText);
	encryptedText = '"' + encryptedText + numberString[encryptionCount] + '"';

	return encryptedText;
}

function reverseDotManager(text) {
  const textLength = text.length;
  const numSize = numberString.indexOf(text[textLength - 1]);
  const deNumberText = text.slice(textLength - (numSize + 1), textLength - 1);
  const balanceText = text.slice(0, textLength - (numSize + 1));
  let  numberText = "";

  for (let index = 0; index < numSize; index++) {
    numberText += numberString.indexOf(deNumberText[index]);
  }

  return balanceText + "." + numberText;
}

function decryptionManager() {
	let encryptedText = prompt("Enter Encrypted Text:");
  encryptedText = encryptedText.slice(1,encryptedText.length - 1);
	const textLength = encryptedText.length;
	const decryptionCount = numberString.indexOf(encryptedText[textLength - 1]);
	let decryptedText = encryptedText.slice(0, textLength - 1);
  decryptedText = reverseDotManager(decryptedText);

	for (let currentCount = 0; currentCount < decryptionCount; currentCount++) {
		decryptedText = decrypt(decryptedText);
	}

  return decryptedText;
}

function main() {
	const task = prompt("Encryption / Decrytion[e/d]:");
  let result = "";

	if (task === "e") {
    result = encryptionManager()
	} else if (task === "d") {
    result = decryptionManager();
  } else {
    result = "Choose right option.";
  }

  console.clear();
  console.log(result);
}

main();
