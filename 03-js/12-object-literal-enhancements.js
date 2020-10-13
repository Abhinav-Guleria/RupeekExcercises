const name = 'John', yearsOld = 32, spouseKey = 'wife';
const jane = {
    name: 'Jane',
    age: 28
};

const john = {
    name, // name: name
    age: yearsOld,
    [spouseKey]: jane,
    celebrateBirthday() {
        this.age++;
    }
};

console.log( john );