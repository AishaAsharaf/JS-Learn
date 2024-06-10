a = [10,11,12,13,14,15]
//square of each element using map()  

b = a.map(num => num**2)
console.log(b);

//forEach

a.forEach(num => {
    console.log(num**2);
})

//
console.log("--------");
//
for(let num of a){
    console.log(num**2);
    
}