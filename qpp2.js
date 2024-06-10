/* 
     *
   *   *
  *  *  *
* * * * * *
 */


/* for(row=1; row<=4; row++){
    str=""
    for(space=3; space>row;space--){
       str+="  "
    }
    for(col=1; col<=row; col++){
        if(col<=3){
           str+=" *  "}
        else
           {str="* * * * * * "}
    }
    console.log(str);

} */

/* use grid system
   7col and 4rows
   find a connection and plot */
/* 
for(row=1; row<=4; row++){
   str=""
   for(col=1; col<=7; col++){
      if(row+col == 5){
         str += "*"
      }
      else if(col-row == 3){
         str +="*"
      }
      else if(row==4 & 1<col<6){
         str = "*"+ str
         
      }
      else{
         str +=" "
      }
      }
   console.log(str);

   } */

/* //*********
//*       *
//*       *
//*********
 */
console.log("---------------");

for(row=1;row<=5;row++){
   str=""
   for(col=1;col<=5;col++){
      if(col == 1 ||col == 5 || row ==1 || row ==5 ){
         str=str+"*"
      }
      else {
         str = str+" "
      }
      
      console.log(str);
   }
}

