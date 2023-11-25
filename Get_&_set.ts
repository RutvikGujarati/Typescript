class Colleges{

    public college: number 
    privates : number
    publics : number


    constructor(privates: number, publics: number, college : number){
           this.privates= privates
           this.publics= publics
           this.college = college
    }
    get AllColleges(): number{
          return 46;
    }

    get seePrivate(): number{
        return this.college
    }

    set CollegeCount(counter : number){
       this.privates= counter
       counter = 45;
    }
        
} 

const Coll = new Colleges(36,483,49)

console.log(Coll);
