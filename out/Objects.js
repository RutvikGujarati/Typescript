"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student1 = {
    nmae: "Rutvik",
    Enroll: 211290107001,
    surname: "Gujarati"
};
var createStd = function (std) { };
createStd({ name: "rutvik", surname: "gujarati", mobileNumber: 392832 });
var setUser = function (name, isPaid) { };
setUser("rutvik", true);
//object with function
function SampleOfObj(surname, id) {
    return { name: "rutvik", isPaid: true };
}
console.log(SampleOfObj);
console.log(createStd);
console.log(setUser);
