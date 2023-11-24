"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student1 = {
    name: "Rutvik",
    Enroll: 211290107001,
    surname: "Gujarati"
};
const createStd = (std) => { };
createStd({ name: "rutvik", surname: "gujarati", mobileNumber: 392832 });
const setUser = (name, isPaid) => { };
setUser("rutvik", true);
//object with function
function SampleOfObj(surname, id) {
    return { name: "rutvik", isPaid: true };
}
console.log(SampleOfObj);
console.log(createStd);
console.log(setUser);
