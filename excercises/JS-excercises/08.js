//Write a for loop that creates a new array with squares of numbers in a supplied array. 
//Example: Supplied array is [ 1, 2, 3, 4 ]. You should generate a new array [ 1, 4, 9, 16 ] from it.

let actualNumber = [1,2,3,4];

let square= [];

for(let i=0;i<actualNumber.length;i++)
{
    square.push(actualNumber[i]*actualNumber[i]);
}

console.log(square);