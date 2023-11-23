
/* Interface and Type is as much as similar ..  */

interface Company {
    project: string,
    lang: string,
    langUsage?: number
    readonly Weight: number
    //we can set method to the objects/ interface

    // Testing: ()=> number
    //   Testing(): number 
    Testing(oneArgu: number, second: string): number // you can pass the arguments with the type declaration
}

const Employee: Company = {
    project: "POrtfolio", lang: "javascript", Weight: 46, langUsage: 4,
    Testing: () => {
        // let sum = a+b;
        // return sum;
        return 4;
    }
}


console.log(Employee);

console.log(Employee.Testing)

// function calling(){
//     Employee.lang = "New added";
//     console.log(Employee.lang)
// }

// calling()