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
	console.log(incrementerText);
  let incrementer = parseInt(incrementerText);
  if (incrementer < 0) {
    Deno.exit();
  }
  let encryptedText = text.slice(0, text.lastIndexOf("."));
  const textLength = encryptedText.length;
	let decryptedText = "";
	incrementer -= textLength;

	for (let index = 0; index < textLength; index++) {
		const textIndex = characters.indexOf(text[index]);
		// const newTextIndex = Math.abs(englishAlphabetsLength + textIndex - incrementer) % englishAlphabetsLength;
		let newTextIndex = (englishAlphabetsLength + textIndex - incrementer) % englishAlphabetsLength;
    newTextIndex = newTextIndex < 0 ? englishAlphabetsLength + newTextIndex : newTextIndex;
		decryptedText += characters[newTextIndex];
		console.log(textIndex,newTextIndex,incrementer,incrementerText, englishAlphabetsLength, characters[newTextIndex]);
    if (isNaN(incrementer)) {
      Deno.exit();
    }
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

	encryptedText += numberString[encryptionCount];
  console.log(encryptedText, 1);
	return encryptedText;
}

function decryptionManager() {
	const encryptedText = prompt("Enter Encrypted Text:");
	const textLength = encryptedText.length;
	const decryptionCount = numberString.indexOf(encryptedText[textLength - 1]);
	let decryptedText = encryptedText.slice(0, textLength - 1);
	console.log(decryptedText, decryptionCount);
	console.log(characters);

	for (let currentCount = 0; currentCount < decryptionCount; currentCount++) {
		decryptedText = decrypt(decryptedText);
		console.log(decryptedText);
	}

	console.log(decryptedText, decryptionCount);
  return encryptedText;
}

function main() {
	const task = prompt("Encryption / Decrytion[e/d]:");

	if (task === "e") {
		return encryptionManager();
	}

	return decryptionManager();
}

main();
