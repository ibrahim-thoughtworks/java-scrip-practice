const first = "...";  //starting nubmer
let firstDemo = first; //ending number
const last = ".....";
let out = "";
for ( ; firstDemo !== last+"." ; firstDemo+="." ) {
    out = out+firstDemo;
}

console.log( "Arithmetic progress from",first.length,"to",last.length,"=",out.length);
