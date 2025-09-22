const number = 1000;
let numberLength = (number+"").length;
let revText = "";

for( let i=0; i< (numberLength) ; i++) {
    revText = revText + (number+"")[numberLength-1-i];
}
if (number+"" === revText) {
    console.log("palindrom",number);
} else {
    console.log("Not palindrom ",number);
}
