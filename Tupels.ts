let User : [number , string] = [12,"You@gmail.com"]// define type in array tuples

User.push("true")// Tuples allows me to add string in array so, there is no immutability

type Student = [
    name: string,
    Id: number,
    surname: string,
    age: number
]

let AllStudent : Student = [ "Rutvik", 47,"gujarati",20]

AllStudent[1] = 34  //you can change it in later using array methods

console.log(AllStudent)

console.log(User)

export {}