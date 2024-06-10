 /* w.a.p to check the eligibility for voting */

age = 12

if(age >=18){
    console.log( "You are eligible to vote");
}
else{
    console.log("Sorry, you are not eligible to vote yet.");
} 

/* w.a.p to check whether a number is postive or negative */
num = 0

if(num >0){
    console.log( "num is positive");
}
else if(num ==0) {
    console.log("num is 0");
}
else {
    console.log("num is negative");
}

/* w.a.p to find the largest number */

num1 = 200
num2 = 300

if(num1>num2){
   console.log("The largest number is num1 "+ num1);

}

else if(num1==num2){
    console.log("Both numbers are equal");
}

else{
   console.log("The largest number is num2 "+ num2);
}

/* find the second largest number and  display it in descending order*/

num3 = 70
num4 = 90
num5 = 50


if (num3 < num4 && num4 < num5 ) {
     console.log ("The second largest number is " + num4);
     console.log (`descending order ${num5}> ${num4}> ${num3}`);
}
else if(num4<num3 && num3<num5 ){
    console.log ("The second largest number is " + num3);
    console.log (`descending order ${num5}>${num3}>${num}`)
}
else if(num4<num5 &&  num5<num3) {
    console.log ("The second largest number is " + num5);
    console.log(`descending order ${num3} >${num5}>${num4}`);
}
else if(num3<num4 && num5<num4 ){
    console.log ("The second largest number is " + num3);
    console.log (`descending order ${num4}>${num3}>${num5}`)
}
else if(num3<num5 &&  num5<num4) {
    console.log ("The second largest number is " + num5);
    console.log(`descending order ${num4} >${num5}>${num3}`);
}
else if(num5<num4 && num4<num3 ){
    console.log ("The second largest number is " + num4);
    console.log (`descending order ${num3}>${num4}>${num5}`)
}






else if(isNaN(num3) || isNaN(num4) || isNaN(num5)){
    console.log('Please enter valid numbers');
}

else {
    console.log ('Please provide at least three different numbers')
}

/* find whether a number is odd or even */

num6 = 42
/* 
if(num6 % 2 == 0){
     console.log("num6 is even");
}
else{
      console.log("num6 is odd");
} */

/* using ternary operator */

num6 % 2 == 0?console.log("num6 is even"):console.log("num6 is odd")