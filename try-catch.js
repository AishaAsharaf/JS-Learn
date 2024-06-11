//try-catch block is use for error handling in js
//try-catch- finally and the three used in the block
//only try/catch will work at once but finally works for both
exp = 10/2

try{
result = eval(exp)
//eval (evaluate) predefined func
console.log(result);
//try block contains statements that might have error
}

catch{
    //this contain solution statement to the error
    console.log("check the expression");
}

finally{
    //this block is common to both try and catch
    console.log("task completed");
}
