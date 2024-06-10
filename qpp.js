//*
//**
//***
//****
//***
//**
//*


/* 

for(i=1; i<=7; i++){
    str ="//"
    star =" *"
    if(i<=4){
        for(col=1;col<=i;col++){
           str = str +star
        }
        console.log(str)
    }
    else if(i>=5){
        for(col=1;col<=8-i;col++) {
            str = str + star
        }
        console.log(str) 
    }
}
 */
    
//   *
//  * *
// * * *
//* * * *

/* for (row=1;row<5;row++) {
    
    space =" "
    

    for(col=4; col>row; col --){
       space+= " "
    }
    for(col=1; col <=row; col ++){
       space+="* "
    }
    
    console.log(space);

} */


//   *
//  * *
// * * *
//* * * *
// * * *
//  * *
//   *

for(row=1; row<=7; row++){
    str =""
    if(row<=4){
        for(space=4; space>row;space-- ){
            str +=" "
            }
        for(col=1;col<=row;col++){
            str+= " *"
        }
    }
    else if(row>4){
            for(space=0; space<row-4 ;space++ ) {
                str +=" "
                }
            for(col=1;col<=8-row;col++){
                str+= " *"
            }    
    }
    console.log(str)
}