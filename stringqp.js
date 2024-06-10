//to check phone num(1o dig)

num = '1828276'
l = num.length
console.log(l==10?'number':'not')


//to check gmail or not

mail = 'aisha@gmail.com'
console.log(mail.endsWith('@gmail.com')?'yes':'no');


//to check start with q

mail = 'aisha'
console.log(mail.startsWith('q') || mail.startsWith('Q')?'yes':'no');


var word = (wd) => {
    return wd.startsWith('q') || wd.startsWith('Q')?`${wd} start with q`:`${wd} not start with q`
}

console.log(word('Qdoc'));

//to check whether there are vowels in the given sentence

sentence = 'Good afternoon all'

vowels =['a','e','i','o','u','A','E','I','O','U']

Array.from(sentence).filter(v => vowels.includes(v)).forEach(char => {console.log(char);});

