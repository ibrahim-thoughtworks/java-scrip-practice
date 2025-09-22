let number = 19;
let substring ="01" ;
let substringsize=0;

let binary = ""
let Answer;

let number1=number;

let a;
console.log("Number:",number);
console.log("Substring:",substring);
while(number1>0) {
    a = number1%2;
    binary = binary + a;
    number1 = (number1 - a)/2;
}

//console.log("binary of",number,binary);

//reverse
binary = "1" + binary;
let binary1=binary*1;

let binaryRev ="";

while (binary1>1) {
    a = binary1%10;
    binaryRev = binaryRev + a;
    binary1 = (binary1 - a)/10

}
binaryRev=binaryRev * 1;////converted to number
console.log("Binary:", binaryRev);

// count
a = ("1"+substring)*1;
let b=0;
let binarydemo = "";
while (a>=1) {
    a = a/10;
    substringsize = substringsize + 1;/////////ff


}
substringsize--;
console.log("Sub string Size:",substringsize);
let count =0;
let binaryRev1;
while (binaryRev>=1) {
    binaryRev1 = binaryRev*1;
    binarydemo=""
    //console.log("binary rev1:",binaryRev1);
    //////////////////ff
    a = binaryRev1;
    b=0;
    while (a>=1) {
      a = a/10;
      b = b + 1;/////////ff
    }
    //console.log("new bin",b)
    for (let x =0; ((substringsize<=b)?x<substringsize:x<b); x++) {
        binarydemo = (binaryRev1%10) + binarydemo;
        binaryRev1 =(binaryRev1-(binaryRev1%10))/10;
        //console.log("for loop:",binarydemo,"rev",binaryRev1);
    }
    //console.log("bb",binarydemo);
    if (binarydemo === substring){
        count++;
        //console.log("counted",binarydemo,substring);
    }
    binaryRev = (binaryRev-(binaryRev%10))/10;
}

console.log("Answer:",count);

