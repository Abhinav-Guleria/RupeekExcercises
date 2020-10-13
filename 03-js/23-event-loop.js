// Java, C, C++ etc. have support for multi-threading

// JavaScript is a single-threaded language
// we cannot have 2 parts of our application code execute concurrently

// EVENT QUEUE - A queue of function (array of functions)
// const fnQueue = [ x => x * x, x => x * x * x  ];

function sum( x, y ) {
    // non-blocking
    // please queue up this function in event queue after 1000 ms
    setTimeout(function() {
        console.log( x + y );
        return x + y;
    }, 3000);
}

console.log( sum( 12, 13 ) ); // undefined

// 5 - 10s
for( let i = 0; i < 100000; i++ ) {
    for( let j = 0; j < 100000; j++ ) {
        ;
    }
}