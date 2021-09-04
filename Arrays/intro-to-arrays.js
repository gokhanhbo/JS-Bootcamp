// Array Literal ==> Array ==> Collection of Data
/*
Collections of
1-songs
2-posts
3-comments
4-numbers
5-levels of games
....
*/

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let colors = ['red', 'green', 'blue'];
console.log(colors);

let mixed = ['yellow', 45, null, undefined, NaN, true];
console.log(mixed);


// Accessing a specific value of an index

console.log(colors[1]);
console.log(mixed[2]);
console.log(numbers[0]);

// Changing the array values
numbers[4] = 25;
console.log(numbers);
console.log(numbers[4]);

//Adding to the end of an array
mixed[mixed.length] = "Gaming";
console.log(mixed);






