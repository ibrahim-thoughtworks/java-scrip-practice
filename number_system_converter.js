const inputReal = 111111 ;
const inputbase = 2;
const outputbase = 3;

let decimal = 0;
let input = inputReal;

let power = 1 ;

while (input >= 1) {

    decimal = decimal + ( input % 10 ) * power;
    input = ( input - ( input % 10 ) ) / 10;
    power = power * inputbase;

}


console.log("base",inputbase,":",inputReal, "= decimal:" , decimal);

let decimal2 = decimal;

let output =0;
let reminder =0;
power = 1;
let length = 0;
while( decimal2>0 ){
    reminder = decimal2 % outputbase;
    length = (power * reminder) + length;
    decimal2 = (decimal2 - reminder) / outputbase;
    //console.log(reminder,output);
    power = power * 10;
}


console.log( "base",inputbase,":",inputReal ,"=","base",outputbase,":",length);


