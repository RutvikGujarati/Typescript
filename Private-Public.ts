class University{
    readonly studentList: number | undefined  // only read not change the value 
    readonly facultyList : number | undefined //private 
    #facultyLi: number = 40// other syntax for private declaration

   public NEWSt: number  =43//accessible at any stage
  
    constructor(studentList: number, facultyList: number){
          let total = studentList+ facultyList;
          console.log(total)
    }
}

const set = new University(34,445)



console.log(set);

set.studentList  
// set.facultyList   .... YOu can not access values that are private 