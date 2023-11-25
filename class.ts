class Subject{
   
    constructor(a: number, b: number){
       let sum = a+b;
       console.log(sum)
    }
}

class manager{
    a: number
    b: number
    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
        let sum  = a+b;
console.log(sum)

    }
}
//create object to pass the constructor values

const obj1  = new manager(34,555)
obj1.a = 5; //this doesn't affect on sum of a and b because it is assigned after the sum performed..


console.log(obj1)

// const managing: manager = { a: 4, b:6}

// console.log(managing)
// console.log(manager)
export {}   