"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(a, b) {
        let sum = a + b;
        console.log(sum);
    }
}
class manager {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        let sum = a + b;
        console.log(sum);
    }
}
//create object to see the constructor values
const obj1 = new manager(34, 555);
console.log(obj1);
