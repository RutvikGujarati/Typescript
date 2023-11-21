"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Sum(a, b) {
    return a + b;
}
var val = function (first, second) {
    return "";
};
val("name", 4);
Sum(5, 6);
var marvel = ["Loki", "Venom", "spiderman"];
marvel.map(function (marvel) {
    return "marvel has ".concat(marvel);
});
//error 
function HandelError(error) {
    console.log(error);
}
function newError(error) {
    throw new Error(error);
}
