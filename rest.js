//rest method to avoid overloading


class Ov{
    method(...arg){
        console.log(arg);
        console.log(arg.reduce((n,m)=>n+m));
        console.log(arg.sort((n,m) => n-m));
    }
    
}

const p =new Ov
p.method(5,4,6)