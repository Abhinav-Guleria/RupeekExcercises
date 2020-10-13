const numbers1 = [ 1, 2, 3, 4, 5 ];
const numbers2 = [ 6, 7, 8, 9, 10 ];

const numbers3 = numbers1.concat( numbers2 )
console.log( numbers3 );

// push()

// pop()
console.log( numbers3.pop() );
console.log( numbers3 );

// shift(), unshift()

// splice() - to remove and add in any place

// slice()
console.log( numbers3.slice( 2, 6 ) );

// reverse()
numbers3.reverse();
console.log( numbers3 );

const fruits = [
    'Oranges',
    'Apples',
    'Mango',
    'Litchi',
    'Strawberry',
    'Pineapple',
    'Sweet Lime',
    'Guava'
];

fruits.sort();
console.log( fruits );

const salesByMonth = [
    1234,
    456,
    120,
    489,
    1005,
    1400,
    1350,
    789,
    890,
    1500045,
    3456,
    234
];

salesByMonth.sort(function( x, y ) {
    // if( x < y ) {
    //     return -1;
    // } else if( x === y ) {
    //     return 0;
    // } else {
    //     return 1;
    // }
    return x - y;
});
console.log( salesByMonth );