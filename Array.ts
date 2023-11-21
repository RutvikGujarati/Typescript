const Arr1 = ["name", "email", 48934] // simple array declaration

type Marvel ={
    superHero: string
    Powers: string
    ability: number
}

const allHeros : Marvel[] = []
const ArrayType : Array<Marvel> = [] // Array keyword declaration with type
const AnotherHero: Marvel[][] =[] // 2*2 Array

const MlNUmbers: number[][] =[
    [35,37,19,28],
    [73,37,49,29],
    []
]

allHeros.push({
    superHero: "Ironmen",
    Powers: "fliying",
    ability: 10
})

console.log(allHeros)
console.log(MlNUmbers)