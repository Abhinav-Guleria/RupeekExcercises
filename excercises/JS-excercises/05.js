//Create an array with a few numbers (at least 4). Now,
//* Print the length of the array (number of items in the array)
//* Increment the value of the first item

//* Re-assign the value of the last item to the sum of the last 2 items.

//* Add another number after the end of the array

//Example: If the array is [ 1, 3, 5, 7 ] and you need to add 9, it is added to the end of the array, and the array becomes [ 1, 3, 5, 7, 9 ]

//* Declare a new array that is empty (has no items). Use a for loop to copy the array items into the new array.

let number = [10,20,30,40,50]
console.log(number.length);

number[0]++;

number[number.length-1] = number[number.length-1] + number[number.length-2];

number.push(60);

let anotherNum=[];

for(let i=0;i<number.length;i++)
{
    anotherNum.push(number[i]);
}

console.log(number);
console.log(anotherNum);