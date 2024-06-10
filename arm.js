/* whether a number is an armstrong no or not */
/* 153 = 1*3+ 5*3+ 7*3 = 153 */
/* 1634 */

num = 1634
power = (num +'').length   // length of
remainder = 0
sum = 0
temp = num

while(num>0){
    remainder = num % 10
    sum = sum + remainder**power
    num = Math.floor(num/10)
}
if (sum == temp){
      console.log(sum);}
else{
    console.log('not arm');
}