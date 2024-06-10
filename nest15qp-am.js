//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

console.log('employee name:');

employee.forEach(emp =>{console.log(emp[1]);})


console.log('------------');


//print total numbers of employee

b =employee.length
console.log(b);

console.log('------------');

//print developer employee details

developer = employee.filter(emp => emp[2]=='developer')
console.log(developer);

console.log('------------');

// print employee name whose salary is more than 30000

salary = employee.filter(emp => emp[4]>30000)
console.log(salary);


console.log('------------');
//print details of employee Laisha

Laisha = employee.filter(emp => emp[1]=='Laisha')
console.log(Laisha);


console.log('------------');
//sort employee based on their salary in descending order
sort_d=employee.sort((emp1,emp2) => emp2[4]-emp1[4])
console.log(sort_d);

console.log('------------');
//sort employee based on their experience in ascending order
sort_a=employee.sort((emp1,emp2) => emp1[4]-emp2[4])
console.log(sort_a);

console.log('------------');
// print the employ name whose have the higest salary

high = employee.reduce((emp1,emp2) => emp1[4]>emp2[4]?emp1:emp2 )
console.log(high);


console.log('------------');

// print the employ name whose have the leasr salary

low = employee.reduce((emp1,emp2) => emp1[4]<emp2[4]?emp1:emp2 )
console.log(low);


console.log('------------');


//tott exp of the company


sum = employee.map(emp => emp[4]).reduce((s1,s2)=> s1+s2)
console.log(sum);