/* w.a.p to check whether expo is in the range 8-36.user can give input */
/* square */
/* 1=1 2=4 3=9 4=16 5=25 6 = 36 */ /* 3 4 5  */


power = 3
low = 8
up = 36

num = 1

while(num<=36){
    
    if (num**power>= low && num**power <= up){
        console.log(num);
    }
    num++
}


