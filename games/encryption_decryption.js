const characters = "kzfdjoyuvmi ;nlphcrtwx'gesbaq:KFWUBTRVLOJAHZXIMYEGPQSDNC?/.>,<|}]{[+=_-)(*&^%$#@!" + '"\\';
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
  let incrementer = text.slice(text.indexOf(".") + 1, text.length);
  let encryptedText = text.slice(0, text.indexOf("."));
  const textLength = encryptedText.length;
	let decryptedText = "";
	incrementer -= textLength;
	for (let index = 0; index < textLength; index++) {
		const textIndex = characters.indexOf(text[index]);
		const newTextIndex = Math.abs(englishAlphabetsLength + textIndex - incrementer) % englishAlphabetsLength;
		decryptedText += characters[newTextIndex];
		incrementer++;
	}
	return decryptedText;
}

function encryptionManager(){
	const userText = prompt("Input a text to encrypt:");
  const encryptedText = encrypt(userText);
  console.log(encryptedText);
	return encryptedText;
}

function decryptionManager() {
	const encryptedText = prompt("Enter Encrypted Text:");
  const decryptedText = decrypt(encryptedText);
	console.log(decryptedText);
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
