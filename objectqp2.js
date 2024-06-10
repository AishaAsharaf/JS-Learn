array = [10,20,30,40,10,30,50,60,30,70,90,100]

wc ={}
array.forEach(element => element in wc?wc[element]+=1:wc[element]=1)
console.log(wc);

//wap to find the first recursive letter

letter = 'ABCGABCFH'
let1 = letter.split("")
console.log(let1);
e = {}
console.log(let1.find(n => n in e?e[n]+=1: e[n]=1 ));