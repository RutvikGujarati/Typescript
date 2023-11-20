let naming: string = "Rutvik";

naming.toLowerCase();

console.log(naming);


//Numbers

let Enroll: number = 84934.378;
Enroll.toExponential;  // Methods are as per type declaration 


// Boolean
let bool: boolean = false;
bool.valueOf()

//You can also ignore this type declaration but it iss not good practice :

let WithoutType = false; // simple javascript

// any

let me : any;  // Type checking stopping with using any type declaration it is not for type decalration it is for just cheking that there is no type defining when variable is assigned or declaraed..

function giveMe(){
    return "me";
}

me = giveMe();

console.log(me);

export { }