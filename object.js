//obj_name = {id:'gdhsd',name:'shujs'}

student_data = {
     id:9,
     name:'aisha',
     class:3,
     school:'BPS'
    }
     
console.log(student_data);

//to display

console.log(student_data.class);

//or

console.log(student_data['school']);

//to access they key use 'for in'

for(let key in student_data){
    console.log(key);
}

//wap to find whether gender key is there if not print no

var gend = () => {
    return student_data.gender?'yes':'no'
}
console.log(gend(student_data));

///ternary op

console.log('gender' in student_data?'present':'not present');

//to add a key value pair
//syntax obj_name["key"]='value'
//but we modify the above program

console.log('gender' in student_data?'present':student_data["gender"]='female');
console.log('-----');
console.log(student_data);

//to update
//obj_name.key='value'

console.log('-----');
student_data.class+=1
console.log(student_data);

//to delete a key
delete student_data.class
console.log(student_data);

//data type
console.log(typeof(student_data));

r =['a','b']
console.log(typeof(r));