'use strict';

let x = 1;

function outer() {
    let o = 1;
    let p = 2;

    console.log( '[inner] o = ', o );
    console.log( '[inner] x = ', x );

    function inner() {
        // we have 2 p's now - one in outer function and another in inner function
        var i = 10, p = 20;

        g = 100; // global - problem!!

        console.log( '[inner] o = ', o );
        console.log( '[inner] x = ', x );
        console.log( '[inner] i = ', i );
        console.log( '[inner] p = ', p );
        console.log( '[inner] g = ', g );
    }

    inner();
    console.log( '[outer] i = ', i ); // error
}

// console.log( ' in global space g = ', g ); // error
outer();
console.log( 'in global space g = ', g ); // 100