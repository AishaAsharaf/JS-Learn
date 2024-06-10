num=11
for(row=1;row<=5;row++){
    
    str =""
    
    for(space=1; space<=5-row;space++){
        str += "   ";
    }
    
    for(col=1; col <= 2*row-1; col ++) {
        str+=num +" ";
        num++
    }
    
    console.log(str);

}