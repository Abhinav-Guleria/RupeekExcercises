// spread - ...

// use it on an array (ES2015)
const numbers1 = [ 1, 2, 3 ], numbers2 = [ 4, 5, 6 ];
const numbers1Copy = [ ...numbers1 ] // [ 1, 2, 3 ]
console.log( numbers1Copy );

numbers1Copy[0]++;
console.log( numbers1 );
console.log( numbers1Copy );

const persons = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Mark', age: 40 }
];
const personsCopy = [ ...persons ];

personsCopy[0].age++;

console.log( persons );
console.log( personsCopy );

// concatenate numbers1 and numbers2
const numbers3 = [ ...numbers1, ...numbers2 ];
console.log( numbers3 );

// Use spread to call a function whch expects comma-separated args but you have the args in an array
console.log( Math.max( 45, 78, 23, 78, 36, 41 ) );

const numbers = [ 45, 78, 23, 78, 36, 41 ];
console.log( Math.max( ...numbers ) );

// use it on an object (ES2018+)
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

const johnCopy = {
    ...john,
    age: 33
};

johnCopy['first name'] = 'Jonathan',
johnCopy.emailids.push( 'john@yahoo.com' );

// if we set so, then johnCopy.emailids will point to its own array now
// johnCopy.emailids = [
//     'john@abc.com',
//     'john@xyz.com'
// ];

console.log( john );
console.log( johnCopy );

const johnAnotherCopy = {
    ...john,
    emailids: [
        ...john.emailids
    ]
};

johnAnotherCopy['first name'] = 'Jonathan',
johnAnotherCopy.emailids.push( 'john@microsoft.com' );

console.log( john );
console.log( johnAnotherCopy );
