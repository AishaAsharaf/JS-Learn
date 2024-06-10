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
for(let det of employee){
    console.log(det[1]);
}

console.log('------------');
//print total numbers of employee
count =0
for(let det of employee){
    count++

}
console.log(count);

console.log('------------');
//print developer employee details
for(let det of employee){
    if(det[2]=='developer'){
        console.log(det);
    }

}

console.log('------------');
// print employee name whose salary is more than 30000
for(let det of employee){
    if(det[4]>30000){
        console.log(det);
    }

}
console.log('------------');
//print details of employee Laisha
for(let det of employee){
    if(det[1]=='Laisha'){
        console.log(det);
    }

}
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
sort_d=employee.sort((emp1,emp2) => emp2[4]-emp1[4])
console.log(sort_d[0][1]);

console.log('------------');