function Sum(a: number,b: number) : number{
   return a+b;
}

const val = (first: string, second : number): string =>{
    return "";
}

val("name",4);
Sum(5,6);


const marvel = ["Loki", "Venom", "spiderman" ]

marvel.map((marvel):string=>{
   return `marvel has ${marvel}`
})


//error 
function HandelError(error: string):void{
   console.log(error);
}
function newError(error: string):never{
  throw new Error(error)
}

export {}