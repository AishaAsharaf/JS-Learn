/* program to calculate the factorial of given number */

num = 3
factorial = 1
count = num

while(count >= 1){
    factorial = factorial * count
    count -= 1

}

console.log(`The factorial of ${num} is ${factorial}`);