class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

class Employee extends Person {
    // has a default constructor
    // constructor( ...args ) {
    //     super( ...args );
    // }
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
        console.log( this.age ); // we can use ANY data member anywhere
    }
}

const john = new Employee( 'John', 32, 'Web Developer', 'IT' );
john.celebrateBirthday();
console.log( john );

const jane = new Employee( 'Jane', 28, 'Accountant', 'Finance' );
jane.promote();
console.log( jane );
