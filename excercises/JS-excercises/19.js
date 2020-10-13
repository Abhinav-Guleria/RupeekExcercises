//19 Create 2 objects (that represents 2 persons, say John and Jane), each with 2 properties - name (a string), and age (a number).
/* Print John's age.
* Increase Jane's age and print the Jane object.
* Add an address property to John and set it to an object with "first line" and "city" as properties (the values for these properties also need to be set).
* Print John's city name
   www.digdeeper.in © Prashanth Puranik puranik@digdeeper.in
* Add a new property spouse to each object. Set John's spouse property to Jane object, and Jane's spouse property to John object
* Add an emailids property to Jane. Set it to an array with 2 strings representing Jane's email ids. * Print the second email id of Jane.
* Change the second email id of Jane and print it.
* Add a third email id for Jane and print the Jane object.
* Add a method celebrateBirthday() on John that adds 1 to the John's age. Call it on John to increase John's age.
* Add a method celebrateBirthday() on Jane that adds 1 to the Jane's age. Call it on Jane to increase Jane's age.
* Wouldn't it be nice to have a single celebrateBirthday() method shared by both John and Jane objects? Declare celebrateBirthday() as a global function and set it up as a method on both John and Jane objects. Call it to check it increases the age.
*/
function celebratebirthday(){
    this.age++;
}

const john = {
    name : 'John',
    age : 30,
    celebrate_john_birthday : celebratebirthday
}

const jane = {
    name : 'Jane',
    age : 27,
    celebrate_jane_birthday : celebratebirthday
}

john.age++;
jane.age++;
console.log(jane);

john.address = {
    firstline : 'H.No : 17',
    city : 'Banglore'
}

console.log(john.address.city);

john.spouse = jane;
jane.spouse = john;

jane.emailid = [
    'jane@rupeek.com',
    'jane@rupeek.com'
]

console.log(jane.emailid[1]);
jane.emailid[1] = 'jane2@gamil.com';
jane.emailid.push('jane@yahoo.com');
console.log(jane.emailid[1]);

console.log(jane);
jane.celebrate_jane_birthday();
john.celebrate_john_birthday();

console.log(jane.age);