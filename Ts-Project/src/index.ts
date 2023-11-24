console.log("New type")

type Student ={
    name: string
    surname: string
    Roll_no: number
}

const std :Student ={name :"Rutvik",surname: "gujarati",Roll_no : 3}
interface Player{
    skill: string,
    age:  number
}


const Cricket: Player = {skill: "Batsman", age: 34}

console.log(std)

console.log(Cricket);
