//* * * * *
//  *   *
//    *
//  *   *
//* * * * * 


for(row=1;row<=5;row++) {
	str=""
    for(col=1; col <= 5 ; col++ ){
        if(row == 1 || row==5){
        str += "*" }
        else if(col%2==0 && row%2==0){
            str += "*"  
        }
        else if(col==3 && row==3){
            str += "*"  
        }
        else{
            str=str+" "
        }
    }
    console.log(str);
    }