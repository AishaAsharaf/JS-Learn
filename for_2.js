/* program iterate 10 tmes but display 5 times */

/* for(i=1;i<=10;i++){
    console.log(i);
    
    if(i>=5){
        break;
    }
    
}  */

/* prime or not */

/* num =9
isPrime =true
for(i=2;i<num;i++){
    
    if(num%i==0){
        isPrime = false
        break;
    }     
}
console.log(isPrime? "prime": "not prime") */

/* print prime btw 1-50 */

/* 
for(i=1;i<51; i++){
    isPrime = true
    for(j=2;j<i;j++){
        if(i%j==0){
            isPrime =false
            break;

        }
    }
    isPrime? console.log(`${i} is a prime number`):null
} */

/* display armstrong no from 8-500 */

power=0
for(i=8;i<=500;i++){
    power =(i+"").length
    sum =0
    remainder =0
    temp =i
    while(temp>0){
        remainder = temp % 10
        sum = sum + remainder**power
        temp = Math.floor(temp/10)
    }
    (sum == i)? console.log(i+ " is an Armstrong number"): null
}





/* find gcd/hcf of given two number */
/* num1 =20
num2 =40
hcf =0
for(i=1;i<=num1 && i<=num2;i++) {
    if(num1%i ==0 &&  num2%i ==0) {
       hcf = i
       
   }
}
console.log(hcf); */