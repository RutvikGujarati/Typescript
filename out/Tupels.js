"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = [12, "You@gmail.com"]; // define type in array tuples
User.push("true"); // Tupels allows me to add string in array so, there is no imutability
var AllStudent = ["Rutvik", 47, "gujarati", 20];
AllStudent[1] = 34; //you can change it in later using array methods
console.log(AllStudent);
console.log(User);
