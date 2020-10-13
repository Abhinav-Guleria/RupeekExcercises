const foo = bar => {
    console.log( typeof bar );
    console.log( bar( 12, 13 ) );
}

const sum = ( x, y ) => x + y;

foo( sum ); // bar = sum