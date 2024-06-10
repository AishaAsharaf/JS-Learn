/* w,a,p to find the reverse of a number */


/* use divide by 10 reminder */

/* rem1 = num%10

quo = ~~(num/10)

rem2 = quo%10

quo1 =  ~~(quo/10)

console.log(`${rem1}${rem2}${quo1}`);  */// prints



num = 100
remainder=0
reverse=0
while(num>0){
    remainder = num%10; // get last digit
    reverse = (reverse*10) + remainder
    num = Math.floor(num/10)   // remove last digit from number
}

console.log(reverse);