const addTo = x => y => x + y;

var addTo10 = addTo( 10 );
console.log( addTo10( 5 ) ); // prints 15
console.log( addTo10( 7 ) ); // prints 17
console.log( addTo10( 100 ) ); // prints 110

// addTo10 = null; // function is eligible for garbage collection

var addTo20 = addTo( 20 );
console.log( addTo20( 5 ) ); // prints 25
console.log( addTo20( 7 ) ); // prints 27
console.log( addTo20( 100 ) ); // prints 120