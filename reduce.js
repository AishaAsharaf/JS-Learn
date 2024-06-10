//reduce()

a = [10,22,5,7,34,90,12,3,78]

//lowest
//highest
//sum

lowest = a.reduce((n1,n2) =>n1<n2 ? n1:n2)
console.log(lowest); 

high = a.reduce((n1,n2) =>n1>n2 ? n1:n2)
console.log(high);

sum = a.reduce((n1,n2) =>n1+n2 )
console.log(sum); 