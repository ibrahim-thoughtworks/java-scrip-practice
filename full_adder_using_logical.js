let a = true;
let b = true;
let c = false;

let sum1 = ((!a&&b)||(a&&!b));
let sum2 = (!sum1 && c) || ( sum1 && !c);
let carry = ( (a&&b) || (c && ( a || b ) ));

console.log("sum:",sum2,"carry:",carry);
