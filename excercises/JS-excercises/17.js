const exponentFactory = exponent => {
    if( exponent === 2 ) {
        return x => x * x;
    } if( exponent === 3 ) {
        return x => x * x * x;
    } else {
        return x => x;
    }
};

var fn;

fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;

fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;

fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;