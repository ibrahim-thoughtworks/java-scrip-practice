const input = 193;
let input2 = input;


let output = 0;
let reminder;
let length = 0 ;
while ( input2>=1 ) {
    reminder = input2%10
    length = length + reminder;
    input2 = (input2 - reminder)/10;
}


console.log(" Sum of digits in",input,"is",length); 
