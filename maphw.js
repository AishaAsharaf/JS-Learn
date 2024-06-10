//create a code using map,print cube

a = [10,11,12,13,14,15]
//square of each element using map()  

b = a.map(num => num**3)
console.log(b);

c = a.forEach(num => console.log(num**3))


console.log("-----");

//w.a.p to incremen num<=13 by 1 and num>=13 decrement by 1

sq = a.map(num => num>13? num-=1  : num+=1 )
console.log(sq);
