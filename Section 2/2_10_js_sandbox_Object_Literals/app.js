const person = {
    firstName: 'Angelique',
    lastName: 'Abacajan',
    age: 18,
    email: 'EExample@gmail.com',
    hobbies: ['music', 'reading', 'coding'],
    address: {
        city: 'Some City',
        state: 'Some State'
    },
    getBirthYear: function() {
        return 2020 - this.age;
    }
}

let val;

val = person;
// Get Specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(person.lastName
    )