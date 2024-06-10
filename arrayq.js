expense = [240 , 300 , 700, 500, 650 ]

// find high
//find low
//total
lowest = expense[0]
highest = expense[0]
sum =0

for(let num of expense){
    if (num < lowest) {
        lowest = num}
    else if(num> highest){
        highest= num
    }
    sum += num
        
    }
console.log(highest);
console.log(lowest);
console.log(sum);


    

        