//wap to solve the qp with diff method

class Bank{

    //property
    accountDetails={
        1000:{acno:1000,username:"userone",password:"userone",balance:10000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:20000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:120000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:5000},
    }
    //validate acno
    vali_display(acno){
        return acno in this.accountDetails?"valid":"invalid"
        

    }
    //autheticate acc
    authenticate(username,password){
        for(let acno in this.accountDetails){
            let account = this.accountDetails[acno];
            if(account.username === username && account.password === password){
                return {status:"succes",account:account};
            }
        }
        return {status:"fail"};
    }
    
    //fund transfer
    trans(from,to,amount){
        if(this.vali_display(from)==="invalid"){
            return "is invalid";
        }

        if(this.vali_display(to)==="invalid"){
            return "is invalid";
        }

        if(this.accountDetails[from].balance<amount){
            return "insufficient balance";
        }
        return this.accountDetails[from].balance-=amount;
        return this.accountDetails[to].balance+=amount; 

        return "Trans succ with balance";
    }

    //check balance
    bal(acno){
        if (this.vali_display(acno)=="valid"){
            let account = this.accountDetails[acno];
            console.log(account.balance);
        }
    }

}
const vali = new Bank();
console.log(vali.vali_display(1000));

const aut = new Bank();
console.log(aut.authenticate('userone','userone'));

const b = new Bank();
b.bal(1000)

const t= new Bank();
console.log( t.trans(1000,1002,30000));




