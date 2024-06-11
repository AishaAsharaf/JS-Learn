//same name but diff arguments
//always execute last arguments
//overloading

class Ov{
    method(){
        console.log("print1");
    }
    method(n){
        this.n1 = n
        console.log(`print2 and ${this.n1}`);
    }

    method(n,m){
        console.log(`print${n} and ${m}`);
    }
}

const p =new Ov
p.method(5)