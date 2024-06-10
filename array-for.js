// to access the array ,for loop is used

fruits =["apple" , "mango" , "pine" ,"banana"]

for(index=0;index<fruits.length;index++){
    console.log(fruits[index])
}

console.log("----------");

//to access thearray using in 

for(let i in fruits){
    console.log(fruits[i]);
}

console.log("------");

//to access thearray using of

for(let i of fruits){
    console.log(i);
}

