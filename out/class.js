"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(a, b) {
        var sum = a + b;
        console.log(sum);
    }
    return Subject;
}());
var manager = /** @class */ (function () {
    function manager(a, b) {
        this.a = a;
        this.b = b;
        var sum = a + b;
        console.log(sum);
    }
    return manager;
}());
//create object to pass the constructor values
var obj1 = new manager(34, 555);
obj1.a = 5;
console.log(obj1);
