function outer() {
    console.log( 'outer this = ', this );

    // inner function - a local variable
    // old function syntax
    const inner1 = function() {
        console.log( 'inner1 this = ', this );
    };

    inner1();
}

outer();