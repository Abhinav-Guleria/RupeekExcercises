// adefault export is being imported
import Human, { x, y } from './Person.js';

export default class Employee extends Human {

    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( 'Happy birthday' );
    }
}