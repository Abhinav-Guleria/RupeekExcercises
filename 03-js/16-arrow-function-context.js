function outer() {
    console.log( 'outer this = ', this );

    // inner function - a local variable
    // old function syntax
    const inner1 = function() {
        console.log( 'inner1 this = ', this );
    };

    inner1();

    // inner function - a local variable
    // arrow function syntax
    const inner2 = () => {
        console.log( 'inner2 this = ', this );
    };

    inner2();
}

outer();
outer.call( { name: 'Jane' } );