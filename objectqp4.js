products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
p ={}
for(pn of products){
    namep =pn.pName
    console.log(namep);  
}

//2. print all mobile details whose display is lcd

for(pn of products){
    disp =pn.display
    if(disp == 'lcd'){
        console.log(pn);
    }
}

//3. print 5g mobile phone name


for(pn of products){
    g =pn.band
    t =pn.pName
    if(g == '5g'){
        console.log(t);
    }
}

//4. sort mobile based on price
products.sort((pro1,pro2) => pro1.price-pro2.price).forEach(element => console.log(element.pName))
console.log("-----");
//5. print costly mobile
c=products.reduce((pro1,pro2) => pro1.price>pro2.price?pro1:pro2)
console.log(c.pName);
//6. print low cost mobile
s=products.reduce((pro1,pro2) => pro1.price<pro2.price?pro1:pro2)
console.log(s.pName);