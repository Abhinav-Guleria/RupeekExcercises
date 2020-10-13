const sumArray = ( arr, transform ) => {
    let result = 0;

    for( let i = 0; i < arr.length; i++ ) {
        result += transform( arr[i] );
    }

    return result;
}

function square( x ) { return x * x };
function cube( x ) { return x * x * x };

console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14
console.log( sumArray( [ 1, 2, 3 ], cube ) ); // prints 36