/* w.a.p 
print fizz when ip / by 3
buzz when/ 5
fizzbuzz when / 15 */

input = 4

if(input % 3 == 0) {
    if (input % 5 == 0){
        if (input % 15 == 0) {
            console.log("FizzBuzz");
        }
        console.log("Buzz");
    }
    console.log("Fizz");
} else if (input % 5 == 0){
    console.log("Buzz");
} else if (input % 15 == 0) {
    console.log("FizzBuzz");
} else{
    console.log('input' + input);
}