//filter()

//wap o print even num
// num>13 print
//check if n>13

a = [10,2,46,87,91,22,30,12,3,1]

b = a.filter(n => n>13);
console.log(b);

c = a.filter(n => n%2==0);
console.log(c);

//some()

d = a.some(n => n>13)
console.log(d);

//find()

f =a.find(n=> n>13)
console.log(f);
