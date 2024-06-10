//splice()

a = ['map','mini','max','mall']

//remove mini

a.splice(1,1)
console.log(a);

//add maxwell

a.splice(1,2,'maxwell','om')
console.log(a);

//slice()

b = ['op','om','on','sin','lie']

c =b.slice(1,3)
console.log(c);

//add num 10-14

c.splice(2,0,10,11)
console.log(c);

//remove 20

c.splice(2,0,20)
console.log(c);

//an array with20,10

d=c.slice(2,4)
console.log(d);
