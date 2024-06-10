//[id, name, designation, location, salary, experience]
//

employee =[ 
    [1000,'Neel','developer','kochi',25000,3]]

//oops

class Employee{

//property
    Empid
    Empname
    Empdesig
    Emploca
    Empsal
    Empex


//construtor
    constructor(eid,ename,edsg,eloca,esal,exe){
        this.Empid = eid
        this.Empname = ename
        this.Empdesig = edsg
        this.Emploca  = eloca
        this.Empsal  =esal
        this.Empex = exe
    }


//methods

    display(){
         console.log(`emp name is ${this.Empname}`);
    }

}

const obj = new Employee(1000,'Neel','developer','kochi',25000,3)
obj.display() 