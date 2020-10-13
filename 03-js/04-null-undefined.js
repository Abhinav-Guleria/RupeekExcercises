// uninitialized variable
let x; // undefined - undefined is a special value in JS
console.log( x );
console.log( typeof x );

let john = { // object literal syntax
    name: 'John',
    age: 32
};

john = null; // useful for releasing memory (the object is now eligible for garbage collection)

console.log( typeof john ); // "object"
console.log( typeof null ); // "object" -> but null is NOT an object

let a = { name: 'I am A' };

// testing if a is an object in JS
if( typeof a === 'object' && a !== null ) {
    console.log( 'a is an object and surely not null' );
}