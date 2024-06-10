// # # # #
// # # # #
// # # # #
// # # # #

/* create this pattern - nested loop */

/* for(row=1; row<=4; row++){
    str = "//"
    
    for(col=1;col<=4;col++){
        str = str +" #"
    }
    console.log(str)
}
 
/* //* * * * *
//* * * * *
//* * * * *
 */
/* for(row=1; row<=3; row++){
    str = "//"
    
    for(col=1;col<=5;col++){
        str = str +" *"
    }
    console.log(str)
} */

// 1111
// 2222
// 3333
// 4444


/* 
for(row=1; row<=3; row++){
    str = "//"
    
    for(col=1;col<=5;col++){
        str = str + row
    }
    console.log(str)
} */

//1234
//1234
//1234

/* for(row=1; row<=3; row++){
    str = "//"
    
    for(col=1;col<=5;col++){
        str = str + col
    }
    console.log(str)
} */

/* \\ *
\\ * *
\\ * * *
\\ * * * * */

/* for(i=1; i<=4; i++){
    str ="//"
    star ="*"
    for(j=1; j<=i; j++) {
       str = str +  " "+star
       
    }
    console.log(str);
}
 */

/* //1
//22
//333
//4444 */

/* for(row=1;row<=4;row++){
    str = "//"
    num = ""+row
    for(col=1;col<=row;col++){
        str += " "+num
        
    }
    console.log(str)
    } */

//1
//12
//123
//1234

/* for(row=1;row<4;row++){
    str = "//"
    for(col=1;col<=row;col++){
        str = str + col
}
console.log(str)
} */

//****
//***
//**
//* 

for(row=1;row<=5;row++){
    str ="//"
    star=" *"
    for(col=1;col<=6-row;col++) {
        
        str = str +star}
    console.log(str);
}