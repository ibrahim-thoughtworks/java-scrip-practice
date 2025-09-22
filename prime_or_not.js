const input =  5;


let isComposite = false;

for (let iteration = 2; iteration<input ; iteration++) {
    if ( (input % iteration) === 0 && input !== 2 ) {
        //console.log(iteration,input%iteration);
        isComposite = true;
        break;
    }

}



let output = ( isComposite === true ) ? "Composite" : "Prime" ;
console.log( input,"is a",output,"number" );
