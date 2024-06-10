//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name

nm = products.forEach(n => {console.log(n[1]);})

console.log('---------------');
//2. display product whose price < Rs.50

price = products.filter(n => n[2]<50).forEach(m => {console.log(m[1]);})

console.log('---------------');

//3. print price of oreo

or = products.filter(n => n[1]=='oreo')
console.log(or);

console.log('---------------');
//4. print costly product name
 
costly = products.reduce((n1,n2 )=> n1[2]>n2[2]? n1:n2)
console.log(costly);

console.log('---------------');
//5. display out of stock product

out = products.filter(n => n[3]==0)
console.log(out);

console.log('---------------');
//6. sort products based on stock in decsending order

st = products.sort((n1,n2) => n1[3]-n2[3]).forEach(n => {console.log(n[1]);})


console.log('---------------');
//7. print product having maximum available stock

maxs = products.reduce((n1,n2) => n1[3]>n2[3]?n1:n2)
console.log(maxs);

console.log('---------------');
//8. is there any product can be purchased by Rs. 10

ten = products.filter(n => n[2]==10)
console.log(ten);
console.log('---------------');
//9. Is there any product in the range of 10 to 30

thirty = products.some(n => 10<n[2]<30)
console.log(thirty?'yes':'no');
console.log('---------------');
//10. print all products in the range of 10 to 30

r = products.filter(n => n[2]<30&&n[2]>10)
console.log(r);