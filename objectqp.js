var car = {
    name : 'boleno',
    model : 'hatch-back',
    manufacturer : 'maruti',
    price : '10Lakhs'
}

//wap to print manu and model

console.log(`model is ${car['model']} and manu is ${car['manufacturer']}`);

//wap to add varient as manuel

car['varient']=['manual']
console.log(car);
// wap to change value of varient as automatic
car.varient.push('automatic')
console.log(car);
//new key as colur :red,blue and green
car['colour']=['red','blue','green']
console.log(car);
