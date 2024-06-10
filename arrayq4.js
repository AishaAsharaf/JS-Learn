//pair sum 6

s =[2,3,1,4,5]
//six =[]

// for(i=0; i< s.length-1; i++){
//     for(j=i+1; j< s.length ; j++ ){
//         if(s[i]+s[j] == 6){
//             six.push(s[i],s[j])
//             console.log("The pairs are : ",six)
//             for(k=0;k<six.length;k++) {
//                 if(s[i]==six[k] || s[j]==six[k]){
//                     six.pop(s[j])
//                     six.pop(s[i])
//                     break
//         }
        
//     }
//     }
//         else{console.log('no pair');}
// }
// }


//binary form

s =[2,3,1,4,5]
sort = s.sort((n1,n2) => n1-n2);
console.log(sort)
low = 0
up = sort.length-1


csum=7

while(low<up){
    psum = sort[low]+sort[up]

    if(csum == psum ){
      console.log(`${sort[low]},${sort[up]}`);
      low++
      
    }
    else if(psum <csum){
      low++
    }
    else{
        up--
    }
}
