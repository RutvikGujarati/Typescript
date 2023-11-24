"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Sum(a, b) {
    return a + b;
}
const val = (first, second) => {
    return "";
};
val("name", 4);
Sum(5, 6);
const marvel = ["Loki", "Venom", "spiderman"];
marvel.map((marvel) => {
    return `marvel has ${marvel}`;
});
//error 
function HandelError(error) {
    console.log(error);
}
function newError(error) {
    throw new Error(error);
}
