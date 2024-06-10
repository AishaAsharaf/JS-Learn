//print common no from given array

// a =[1,2,3,4,5]
// b =[2,4,6,8]
// c=[]

// for(i=0; i<=a.length-1 ; i++){
//     for(j=0;j<=b.length-1; j++){
//         if (a[i] == b[j]){
//             c.push(a[i]);
//         }
//     }
// }
// console.log("common elements are : " + c)

//print common numbers using binary search
a =[10,11,12,20,30]
b =[11,20,25,30,33]
c=[]

asort = a.sort((n1,n2) => n1-n2);
bsort = b.sort((n1,n2)=> n1-n2);


console.log(asort);
console.log(bsort);



for(i in asort){
    for(j in bsort){
        if((asort[i] == bsort[j])){
            c.push(asort[i])
            i++
            j++
        }
        else if(asort[i]<bsort[j]){
            j++
        }
        else{
            j++
        }
    }
    
}
console.log(c)
                                                                                                                                                  

//shud be more correct