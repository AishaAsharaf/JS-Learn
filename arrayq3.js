//find duplicate number
// ip_array =[10,20,30,30,20,10,40,50]

/* ip_array =[30,20,10,40,50] */


/* isDuplicate=false
for(num=0;num<ip_array.length;num++){
    for(j=num+1; j<ip_array.length ; j++){
    if(ip_array[num] == ip_array[j]){
        isDuplicate=true
        console.log(`dup num is${ip_array[j]}`);
        
    }
}
}
//truthy operator
!isDuplicate && console.log("no duplicate"); */

//not work for 3 duplicate

a =[1,2,3,4,4,3,2,3,4,1,5,6,7]
b=[]
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            isDuplicate = false
            for(k=0;k<=b.length-1;k++){
                if(a[i]==b[k]){
                    isDuplicate =true
                    break   
                }
            }
           if(!isDuplicate){
           b.push(a[i])  
           }
       }
    }
}
isDuplicate?console.log(b):console.log('No Duplicates')

