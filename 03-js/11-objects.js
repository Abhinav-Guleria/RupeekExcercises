// object literal syntax
// all keys are strings
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

console.log( john['first name'] ); // syntax to access any property with special chracter in its name
console.log( john.age );

console.log( john.emailids[1] );
console.log( john['emailids'][1] );

console.log( john.spouse ); // undefined

const jane = {
    name: 'Jane',
    age: 28
};

john.spouseAge = jane.age; // a copy by value (primitive value is copied)
john.spouseAge++; // does not increase jane's age
john['first name'] = 'JOnathan';

john.spouse = jane; // a copy be reference (object value is copied by reference)
john.spouse.age++; // changes jane object

jane.children = john.children = [
    { name: 'Jack', age: 7 },
    { name: 'Jill', age: 10 }
];

john.addChild = jane.addChild = function( newChild ) {
    this.children.push({
        name: newChild,
        age: 0
    });
};

john.addChild( 'Joe' );

delete john.age;

console.log( john );
console.log( jane );