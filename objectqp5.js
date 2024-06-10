accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts

console.log('number of account');
l = accounts.length
console.log(l); 
console.log('------');

//2. print account number whose ac_type is savings
console.log('ac no of ac type is savings');
savings=accounts.filter(n => n.ac_type=='savings').forEach(m => {console.log(m.acno);})

console.log('------');
//3.print the balance of accnount number 1000
console.log('ac no of ac type is savings');
savings=accounts.filter(n => n.ac_type=='savings').forEach(m => {console.log(m.acno);})

console.log('------');


//4. print all gpay transactions
console.log("gpay trans");

trans = accounts.map(data => data.transaction).flat()
console.log(trans);
gp = trans.filter(n=>n.mode=='gpay')
console.log(gp);

console.log("-----");
//5. print all transaction whose amount > 5000

console.log('>5000');
trans = accounts.map(data => data.transaction).flat()

gp = trans.filter(n=>n.amount>5000)
console.log(gp);

console.log("-----");


//6. print credit transaction of account 1002

console.log('credit of 1002');


trans = accounts.map(n=> n.transaction).flat().filter(m=>m.to==1002)
console.log(trans);





console.log("-----");

//7. print debit transaction of account 1002

console.log('debit of 1002');

trans = accounts.find(n=>n.acno==1002).transaction
console.log(trans);


console.log("-----");




//8. print transaction history of 1002
console.log('transactions history of 1002');
savings = accounts.map(n=> n.transaction).flat().filter(m=>m.to==1002)
trans = trans = accounts.find(n=>n.acno==1002).transaction
history={}
history['credit']=savings
history['debit']=trans
console.log(history);
console.log('------');

//9. print highest balance account details

console.log('high balance');
savings=accounts.reduce((n1,n2) => n1.balance>n2.balance?n1:n2 )
console.log(savings);

console.log('------');