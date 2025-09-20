const testCase1 = "     Z  Z  Z L  L    Z  L        Z";
const testCase2 = "LZ";
const testCase3 = "L Z";
const testCase4 = "L ZL";

const testCaseToUse = testCase1;
const stringLength = testCaseToUse.length;

let firstLetter = "";
let leastDistance = "";
let count = 0;
let onlyOneAnimal = true;
for ( let repeat =0 ; repeat<stringLength ; repeat++) {
    let letter = testCaseToUse[repeat] ;
    if ( letter !== " " ) {
//        console.log(count," ",leastDistance," ",letter);
        if ( firstLetter === "" ) {
            firstLetter = letter;
//            console.log("a");
        } else if ( firstLetter !== letter ) {
            if ( leastDistance === "" ) {
                leastDistance = count;
//                            console.log("b");
            } else if ( leastDistance > count ) {
                leastDistance = count;
 //               console.log("c");
            }
            firstLetter = letter;
            onlyOneAnimal = false;
        }
        count = 0;   
        continue;
    }
    count ++;
}

let output;
if ( !onlyOneAnimal ) {
    output = leastDistance;
} else {
    output= -1;
}

console.log("Input: ", testCaseToUse, "Output:",output)


