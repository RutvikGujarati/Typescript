const Student1 = {
    name: "Rutvik",
    Enroll: 211290107001,
    surname: "Gujarati"
}
//object with type define

type std2 = {
    name: string;
    surname: string;
    mobileNumber: number
}
const createStd = (std: std2) => { }

//optional details 

type User = {
    name: string
    UPI?: boolean // not compulsory  for assigning when user is registering
}

createStd({ name: "rutvik", surname: "gujarati", mobileNumber: 392832 })

const setUser = (name: string, isPaid: boolean) => { }

setUser("rutvik", true)

//object with function

function SampleOfObj(surname: string, id: Int32Array): { name: string, isPaid: boolean } {
    return { name: "rutvik", isPaid: true }
}

export { }

console.log(SampleOfObj)
console.log(createStd)
console.log(setUser)