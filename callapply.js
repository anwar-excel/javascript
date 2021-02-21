const normalPerson = {
    firstName: 'kamal',
    lastName: 'Uddin',
    salary: 15000,
    getFulName: function(){
        
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(2500);
console.log(normalPerson.salary);