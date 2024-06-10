arr = [2,4,5,1,6,7,9,0]
a = arr.sort((n1,n2) => n1-n2);
console.log(a);
count = 0
value = 5
for(i of a){
    count++
    if(value == i){
        console.log("same");
        break;
    }
}

// value = 6
// low = 0
// high = a.length - 1;
// count = 0
// for(let i in a){
//     count++
//     let mid = Math.floor((low + high)/2);
//     if (a[mid] == value) {
//         console.log(`The index of ${value} is ${mid}`);
//         break;
//     } else if (a[mid] < value) {
//         low = mid + 1;
//     } else {
//         high = mid - 1;
//     }
// }


console.log(count);