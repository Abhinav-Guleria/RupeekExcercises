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