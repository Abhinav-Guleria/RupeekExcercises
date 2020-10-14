import Employee from './Employee.mjs';
// const Employee = require( './Employee' );

const john = new Employee( 'John', 32, 'Web Developer', 'IT' );
john.celebrateBirthday();
console.log( john );

const jane = new Employee( 'Jane', 28, 'Accountant', 'Finance' );
jane.promote();
console.log( jane );

// same as exporting john and jane individually
export {
    john,
    jane
}

// in some other file...
// import { john, jane } from './index.mjs'