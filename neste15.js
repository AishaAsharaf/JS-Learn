// to find numbers less than or equal to 10
//nested array

// arr = [[11,31], [110,41], [51,91], [14,11], [16,41]]
// isPres = false
// for(let a of arr){
    
//     for(let n of a){
//         if(n==10 || n<10){
//             console.log(n);
//             isPres=true
//         }
        
//     }

// }
// isPres?console.log("Present"):console.log("not present");


//w.a.p to find even numbers in an array

// arr = [[101,3], [12,78], [43,72], [8,88], [22,14], [33,57]]
// isPresent = false

// b= arr.flat()
// console.log(b)
// for(let n of b){
//         if(n%2==0){
//             console.log(`${n} is even`)
//             isPresent= true
//         }
//     }

// !isPresent?console.log("Not present"):console.log("Present")


//To change dimension we use flat(),depth shud be specified if it is more than 1

arr = [[101,3], [12,78], [43,[72,11,45],67], [8,88], [22,14], [33,57]]
a= arr.flat(2)
console.log(a);