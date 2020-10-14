// this -> function context
function foo() {
    console.log( this ); // tells more about the environment in which the function executes
    console.log( this.process ? 'running in Node.js' : 'running in browser' );
}

foo();

const john = {
    name: 'John',
    foo() {
        console.log( this ); // john
    }
}

john.foo();

// we can call any function using .call()
foo.call(); // sets up the default context when foo is called
foo.call( { process: 1 } ); // context will be set to { process: 1 }

john.foo.call(); // environment object

// the idea: jane can "borrow" john's foo method and use it like her own (you can explore more on "duck typing")
const jane = { name: 'Jane' };
john.foo.call( jane );

// globalFoo and john.foo refer to the same function in memory
const globalFoo = john.foo;

john.foo(); // "this" is john object
globalFoo(); // "this" is window (browser) | global (Node.js)

// does not call the function
// johnFoo() -> john.foo.call( john );
const johnFoo = john.foo.bind( john );

const janeFoo = john.foo.bind( jane ); // does not call the function