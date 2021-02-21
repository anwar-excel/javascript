const normalPerson = {
    firstName: 'kamal',
    lastName: 'Uddin',
    salary: 15000,
    getFulName: function(){
       console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this)
        this.salary = this.salary - amount;
        return this.salary;
       
    }
    
}

const heroPerson = {
    firstName: 'Hero',
    lastName:'Balam',
    salary:25000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName:'Golam',
    salary:25000,
}

const herochargeBill = normalPerson.chargeBill.bind(heroPerson);
herochargeBill(2000);
herochargeBill(3000);
herochargeBill(5000);
console.log(heroPerson.salary);
