//sort
arr = [2,4,5,1,6,7,9,0]
//for sort we use call back function
//ascending order
a=arr.sort((n1,n2) =>  n1-n2); 
console.log(a);

//descending order
b=arr.sort((n1,n2)=> n2-n1);
console.log(b);