//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log("high positive case");
phigh = covid_data.reduce((n1,n2) => n1[2]>n2[2]?n1:n2)
console.log(phigh[1]);

console.log("----------");

//2. district having Highest 1st dose vaccine

console.log("1St vaccine");
hfdose = covid_data.reduce((n1,n2) => n1[5]>n2[5]?n1:n2)
console.log(hfdose[1]);

console.log("----------");

//3. district having lowest death rate

console.log("low deah rate");
hfdose = covid_data.reduce((n1,n2) => n1[3]<n2[3]?n1:n2)
console.log(hfdose[1]);

console.log("----------");

//4. sort data with +ve case in descending order

console.log("+ve case in desc order");
hfdose = covid_data.sort((n1,n2) => n2[2]-n1[2]).forEach(p => {console.log(p[1]);})


console.log("----------");

//5. is district with +ve cases > 15000

console.log("+ve case>15000");
hfdose = covid_data.filter(n => n[2]>15000).forEach(p => {console.log(p[1]);})


console.log("----------");

//6. sort data with 1st dose vaccine ascending order

console.log("1 dose vacc in asc order");
hfdose = covid_data.sort((n1,n2) => n1[5]-n2[5]).forEach(p => {console.log(p[1]);})


console.log("----------");

//7. Print Thrissur details
console.log("thrissur details");
hfdose = covid_data.filter(n => n[1]=='Thrissur')
console.log(hfdose);


console.log("----------");


//8. Print total number of positive cases

console.log("tot +ve cases");
hfdose = covid_data.map(n => n[2]).reduce((n1,n2) => n1+n2)
console.log(hfdose);

console.log("----------");

//9. Print total number of curred cases

console.log("tot curred cases");
hfdose = covid_data.map(n => n[4]).reduce((n1,n2) => n1+n2)
console.log(hfdose);

console.log("----------");

//10. Print curred cases in Idukki
console.log("curred cases in Idukki");
hfdose = covid_data.filter(n => n[1]=='Idukki').forEach(m => {console.log(m[4]);})



console.log("----------");