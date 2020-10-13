const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const first = days[0], second = days[1], fifth = days[4];
const [ first, second, ...restOfDays ] = days;
console.log( first, second, restOfDays );

const john = {
    'first name': 'John',
    'age': 32,
    emailids: [
        'john@gmail.com',
        'john@rupeek.com'
    ],
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    },
    addEmailids: function( newEmailid ) {
        this.emailids.push( newEmailid );
    }
};

// const age = john.age, firstName = john['first name'], city = john.address.city, secondaryEmailId = john.emailids[1];

const { age, address : { city }, ...restOfJohnDetails } = john;
console.log( age, city, restOfJohnDetails );

restOfJohnDetails.name = 'Jonathan'; // will not affect john.name (primitives are copied by value)
restOfJohnDetails.emailids.push( 'john@yahoo.com' ); // will affect john.emailids

console.clear();
console.log( john );
console.log( restOfJohnDetails );