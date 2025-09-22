let earnings=14945;
let savingPercentage = 10;
let savings = earnings*savingPercentage/100;
let currentsavings = 498;

if (savingPercentage<=15) {
    console.log("savings is poor!");
} else if(savingPercentage<=20) {
    console.log("savings is good");

} else if (savingPercentage<=25) {
    console.log("savings is very good!");
} else if (true) {
    console.log("please consider your family!!!!");
}

console.log("you saved",savings,"rupees this month");
console.log("total savings",savings+currentsavings);
