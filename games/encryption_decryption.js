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
  const incrementAdder = 1 + Math.floor(Math.random() * 8);
  const textLength = text.length;
  let encryptedText = "";

  for (let index = 0; index < textLength; index++) {
    const textIndex = characters.indexOf(text[index]);
    const newTextIndex = (textIndex + incrementer) % engLetterSize;
    encryptedText += characters[newTextIndex];
    incrementer += incrementAdder;
  }
  return encryptedText + "." + incrementer + incrementAdder;
}

function crackLetters(updater, txtSize, text, decryptedTxt, incAdder) {
  const engLetterSize = characters.length;
  updater -= txtSize * incAdder;

  for (let index = 0; index < txtSize; index++) {
    const textIndex = characters.indexOf(text[index]);
    let newIndex = (engLetterSize + textIndex - updater) % engLetterSize;
    newIndex = newIndex < 0 ? engLetterSize + newIndex : newIndex;
    decryptedTxt += characters[newIndex];
    updater += incAdder;
  }
  
  return decryptedTxt;
}

function decrypt(text) {
	const incTxt = text.slice(text.lastIndexOf(".") + 1, text.length - 1);
  const incAdder = parseInt(text.slice(text.length - 1, text.length))
  let updater = parseInt(incTxt);
  let encryptedText = text.slice(0, text.lastIndexOf("."));
  const txtSize = encryptedText.length;
	let decreptedTxt = "";
	decreptedTxt = crackLetters(updater, txtSize, text, decreptedTxt, incAdder);

	return decreptedTxt;
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
