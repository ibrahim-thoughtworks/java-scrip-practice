const characters = 
	"kzfdjoyuvmi ;nlphcrtwx'gesbaq:KFWUBTRVLOJAHZXIMYEGPQSDNC?/.>,<|}]{[+=_-)(*&^%$#@!" + 
	'"\\' +
	"1325467098";
;
const numberString = "abcdefghij";

function encrypt(text) {
  const englishAlphabetsLength = characters.length;
  const constantIncrementer = 1 + Math.floor(Math.random() * englishAlphabetsLength);
  let incrementer = constantIncrementer;
  const textLength = text.length;
  let encryptedText = "";

  for (let index = 0; index < textLength; index++) {
    const textIndex = characters.indexOf(text[index]);
    const newTextIndex = (textIndex + incrementer) % englishAlphabetsLength;
    encryptedText += characters[newTextIndex];
    incrementer++;
  }
  return encryptedText + "." + incrementer;
}

function decrypt(text) {
  const englishAlphabetsLength = characters.length;
	const incrementerText = text.slice(text.lastIndexOf(".") + 1, text.length);
  let incrementer = parseInt(incrementerText);
  let encryptedText = text.slice(0, text.lastIndexOf("."));
  const textLength = encryptedText.length;
	let decryptedText = "";
	incrementer -= textLength;

	for (let index = 0; index < textLength; index++) {
		const textIndex = characters.indexOf(text[index]);
		let newTextIndex = (englishAlphabetsLength + textIndex - incrementer) % englishAlphabetsLength;
    newTextIndex = newTextIndex < 0 ? englishAlphabetsLength + newTextIndex : newTextIndex;
		decryptedText += characters[newTextIndex];
		incrementer++;
	}

	return decryptedText;
}

function encryptionManager(){
	const encryptionCount = 1 + Math.floor(Math.random() * 8);
	let encryptedText = prompt("Input a text to encrypt:");

	for (let currentCount = 0; currentCount < encryptionCount; currentCount++) {
		encryptedText = encrypt(encryptedText);
	}

	encryptedText = '"' + encryptedText + numberString[encryptionCount] + '"';
  console.clear();
  console.log(encryptedText);
	return encryptedText;
}

function decryptionManager() {
	let encryptedText = prompt("Enter Encrypted Text:");
  encryptedText = encryptedText.slice(1,encryptedText.length - 1);
	const textLength = encryptedText.length;
	const decryptionCount = numberString.indexOf(encryptedText[textLength - 1]);
	let decryptedText = encryptedText.slice(0, textLength - 1);

	for (let currentCount = 0; currentCount < decryptionCount; currentCount++) {
		decryptedText = decrypt(decryptedText);
	}

  console.clear();
	console.log(decryptedText);
  return decryptedText;
}

function main() {
	const task = prompt("Encryption / Decrytion[e/d]:");

	if (task === "e") {
		return encryptionManager();
	}

	return decryptionManager();
}

main();
