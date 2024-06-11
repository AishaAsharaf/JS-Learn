//overriding is supported by js
//same name and same no of arguments

class A{
    methoda(){
        console.log("first");

    }
}
//class B extends to class A(classical inheritance)
class B extends A{
    methoda(){
        console.log("second");
    }

    methoda(){
        console.log("third");
    }
}
//will print the last written or executed,in this code class B contain 3 methoda functions 

const oj = new B
oj.methoda()

//print third