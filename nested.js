/* nested function */
//global,parent,child variables

const global ="global"

const parent = () =>{
    let parentVariable = "PARENT"
    console.log(`parent variable is ${parentVariable}`);
    console.log(`global variable is ${global}`);
    
    const child =() =>{
        let childVariable = "CHILD"
        console.log(`child variable is ${childVariable}`);  
        console.log(`global variable is ${global}`);
        console.log(`parent variable is ${parentVariable}`);
    }

    child()

}
parent()