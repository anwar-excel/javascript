const normalPerson = {
    firstName: 'kamal',
    lastName: 'Uddin',
    salary: 15000,
    getFulName: function(){
       console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this)
        this.salary = this.salary - amount -tips - tax;
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

// const herochargeBill = normalPerson.chargeBill.bind(heroPerson);
// herochargeBill(2000);
// herochargeBill(3000);
// herochargeBill(5000);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 10000, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 5000, 600, 400);

// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [5000, 600, 400]);

console.log(friendlyPerson.salary);