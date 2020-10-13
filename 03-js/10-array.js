const primes = [ 2, 3, 5, 7 ];

primes[ primes.length ] = 11;
primes.push( 13 );

// splice - to add / delete items
primes.splice( 2, 2, 17, 19, 23 );

console.log( primes );