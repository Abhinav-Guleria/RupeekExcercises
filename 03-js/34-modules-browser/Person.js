// ONLY 1 item can be default export
export default class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

export const x = 1;
export const y = 2;