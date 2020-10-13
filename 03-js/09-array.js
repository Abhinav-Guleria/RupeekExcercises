// arrays can have mixed type of items
const primes = [ 'Two', 3, 'Five', 7 ];

// primes = [ 2, 3, 5, 7, 9 ]; // error

console.log( primes[0] );

primes[1]++;
primes[3] = primes[3] + 10;
primes[20] = 107; // ok!

console.log( primes[4] ); // undefined

console.log( primes.length );
console.log( primes );

for( let i = 0; i < primes.length; i++ ) {
    console.log( primes[i] );
}

const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9, 10 ]
];

console.log( matrix[1][2] );