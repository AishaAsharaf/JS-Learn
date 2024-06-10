//find 2 in array or not

num =[1,200,40,5,77,2,67]
/* num1 = 2
for(let i of num){
    if(num1 == i){
        console.log("It has the number 2");   
    }
    
}
 */
isPresent = false
searchItem =2
for(i of num){
    if(i==searchItem) {
        isPresent=true
        break
}

}
console.log(isPresent? 'present':'not present');