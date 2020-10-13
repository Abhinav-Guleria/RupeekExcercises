// function declaration syntax (old)
function sum1( x, y ) {
    // return undefined; // default return value for a function
    return x + y;
}

// function expression syntax (old)
const sum2 = function( x, y ) {
    return x + y;
};

// arrow function syntax (new)
const sum3 = ( x, y ) => {
    return x + y;
};

const result1 = sum1( 12, 13 );
console.log( `result1 = ${result1}` );

const result2 = sum2( 12, 13 );
console.log( `result2 = ${result2}` );

const result3 = sum3( 12, 13 );
console.log( `result3 = ${result3}` );

console.clear();

const sum4 = ( x, y ) => x + y;

const result4 = sum4( 12, 13 );
console.log( `result4 = ${result4}` );

// we can omit () around arguments for a single argument function
const square = x => x * x;

console.log( square( 12 ) );

const greet = () => console.log( 'good day' );

greet();