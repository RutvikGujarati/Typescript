"use strict";
const mergeDataType = "name" || 8493493; // You can declare multiple types using union operator...
//mergeDataType = 433  // caannot declare because it is const
console.log(mergeDataType);
function DoubleData(id) {
    // id.toLowerCase()
    //put the condition to check that if it is number or not?
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id.toPrecision();
    }
}
//Own type definataion
let Movie;
Movie = "Action";
Movie = "Horror";
//Movie= 372 // you don't do this
console.log(Movie);
DoubleData(372);
console.log(DoubleData);
