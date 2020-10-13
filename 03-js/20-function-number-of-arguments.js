const sum = ( x, y ) => x + y; // arguments object has all arguments actually passed

console.log( sum( 10, 20, 30 ) ); // x = 10, y = 20

console.log( sum( 10 ) ); // x = 10, y = undefined, 10 + undefined -> NaN