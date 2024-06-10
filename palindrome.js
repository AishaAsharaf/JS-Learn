/* check whether palindromeor not */

num = 101

remainder = 0
reverse = 0
temp = num

while(num>0){
    remainder = num%10
    reverse = reverse*10 + remainder
    num = Math.floor(num/10)
}


if(reverse == temp){
    console.log(`Both numbers are palindrome ${reverse} and ${temp}`);
}
else{
    console.log('Not a palindrome');
}

