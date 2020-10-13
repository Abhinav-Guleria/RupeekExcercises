// ES2015 operator called rest - ...
const foo = ( x, y, ...restOfArgs ) => {
    console.log( x, y, restOfArgs );
}

sumAll( 1, 2, 3, 4, 5, 6, 7 ); // x = 1, y = 2, restOfArgs = [ 3, 4, 5, 6, 7 ]

const sumAll = ( ...nums ) => { };