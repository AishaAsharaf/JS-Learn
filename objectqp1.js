string = "hai Hello all hello world all"
//wap to print how many times each word is present
//o/p= hai-1,hello-2,world-1,all=2


n = string.split(" ")

op = {}



for(char of n){
    if(char in op){
        op[char]+=1
    }
    else{
        op[char]=1
    }
    
}
console.log(op);


wc ={}
string.split(" ").forEach(element => element in wc?wc[element]+=1:wc[element]=1)
console.log(wc);




