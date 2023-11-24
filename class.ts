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

console.log(obj1)

// const managing: manager = { a: 4, b:6}

// console.log(managing)
// console.log(manager)
export {}