
// str = 'aisha Asharaf'

// //startsWith

// a=str.startsWith('ai')
// console.log(a);

// //endsWith

// b=str.endsWith('raf')
// console.log(b);

// console.log(str.endsWith('araf'))

// //they are case sensitive

// //toUpperCase

// console.log(str.toUpperCase())

// //toLowerCase
// //trim space from either side not btw
// l = '  rdgcXFCFCBB   jK   '
// console.log(l.toLowerCase().trim());

// //substring
// console.log(str.substring(2,7));

// //replaceAll
// console.log(l.replaceAll('jK','ALL'));

// console.log(l.replace("",",,"));

//to check if string is palindrome

string = 'aisha'

start =0
check = string.length-1

ispalin = true
while(start<check){
    if(string[start]!=string[check]){
        ispalin = false
    }
    
    start++
    check--
    
    
}
console.log(ispalin?'yes':'no');