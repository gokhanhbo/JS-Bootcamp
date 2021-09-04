let movies = ["The Lake House", "Memento"];
console.log(movies);

// Shift Method ==> removes from the start
movies.shift()
console.log(movies);

//Unshift Method ==> Adds to the start
movies.unshift("The Great Gatsby");
console.log(movies);

//POP Method ==> removes from to the end
movies.pop();
console.log(movies);

//Push Method ==> Add to the end
movies.push("Departed");
console.log(movies);

let numbers = [1,2,3,4,54,115,543,422];
console.log(numbers);

//Slice Method ==> slice(starting index,  ending index)
let num1 = numbers.slice(1,4);
console.log(num1);

let num2 = numbers.slice(-3);
console.log(num2);

//Splice Method ==> splice(starting index, number of items to be removed)
let num3 = numbers.splice(2,2);
console.log(num3);
console.log(numbers);

// Removing and Replacing
let num4 = numbers.splice(0, 2, 111, 222);
console.log(num4)
console.log(numbers);

// Adding
let num5 = numbers.splice(2,0,111,222);
console.log(num5);
console.log(numbers);

//Includes Method
const moods1 = ["happy","sad","satisfied"];
console.log(moods1.includes('happy'));
console.log(moods1.includes('fair'));

//Concat Method
const moods2 = ['fair','uncertain', 'relax'];
console.log(moods1.concat(moods2));
console.log(moods2.concat(moods1));

//Reverse Method
console.log(moods2.reverse());

//Join Method
console.log(moods1.join(";"))
console.log(moods1.join("|"))
console.log(moods1.join(" "))
console.log(moods1.join("#"))

//Nesting Method ==> array of arrays
const favs = [
    ['Endgame','Infınıty Wars','Civil Wars','Ironman','Thor'],
    ['Batman', 'Superman','Wonder Woman'],
    ['Spiderman','Antman','Hulk','Hawkeye'],
    ['Nolan','Snyder','Reeves'],
    ['DiCaprio','Hardy','Toby','Andrew'],
];
console.log(favs);
console.log(favs[1]);
console.log(favs[3][2]);
console.log(`${favs[4][0]}'s first name Leonardo`);

























