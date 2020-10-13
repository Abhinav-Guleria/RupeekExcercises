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

const { age, 'first name' : firstName, address : { city }, emailids : [ , secondaryEmailId ] } = john;
console.log( age, firstName, city, secondaryEmailId );