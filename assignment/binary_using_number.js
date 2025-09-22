const num = 65;
const subString = "000";

let binary = 0;

console.log("Number:",num);
//converting num to binary
let numDemo = num;
let power = 1;
let reminder;
while ( numDemo>=1 ) {
    reminder = ( numDemo%2 );
    binary = (power*reminder) + binary;
    numDemo = ( numDemo-reminder )/2;
    power = power*10;

}
console.log ("Binary:",binary);


// Convering string to number
const demoSubString = 1+subString
console.log("Sub String:",subString);
let subStringInDecimal = 0;
let subStringSize = 1;
let idk = 10;
while (subStringInDecimal+"" !== demoSubString) {
    subStringInDecimal ++;
    if ( idk===subStringInDecimal) { //counting number length;
        idk = idk * 10;
        subStringSize++;
    }
}
subStringSize--;
//console.log("number:",subStringInDecimal);
console.log("Sub string Size:",subStringSize);


//Finding sub string in binary
let binaryDemo = binary;
let subStringSizeDemo = subStringSize;
let repeat;
let checkingBinary;
reminder = 0;
let answer = 0;
while ( binaryDemo>=1 ) {
    let binaryDemoDemo = binaryDemo;
    checkingBinary = 0;
    power = 1;
    for ( repeat=0; repeat<subStringSize ; repeat++ ) {
        reminder = binaryDemoDemo%10;
        checkingBinary = (reminder*power) + checkingBinary;
        power = power*10;
        binaryDemoDemo = ( binaryDemoDemo-reminder )/ 10;
        //console.log("checking:",checkingBinary);
    }
    //power = power*10;
    checkingBinary = (1 * power) + checkingBinary;
    //console.log("binary:",checkingBinary,"string:",subStringInDecimal);
    if ( checkingBinary===subStringInDecimal) {
        answer++;
    }
    binaryDemo = (binaryDemo - (binaryDemo%10)) / 10;
}

console.log("Answer:",answer);





