//ip =[4,5,6]
//op=[11,10,9]

ip_array = [4,5,6]
add = 9
op =[]
for(let num of ip_array){
    add = add -2
    op_array = num + add
    op.push(op_array)

}

console.log(op);