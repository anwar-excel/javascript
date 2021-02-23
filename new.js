class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('hero', 'balam', '200');
console.log(heroPerson);

const friendlyPerson = new Person('hero', 'kamal', '200');
console.log(friendlyPerson);
