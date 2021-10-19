// Looping through Arrays

const numbers = [25,65,95,45,135];

for(let i = 0; i < numbers.length; i++) {
    console.log(`index number ${i} is ${numbers[i]}`);
}


// Looping Through Objects Nested Within Arrays
const favBooks = [
    {
        bookName: 'The Kite Runner',
        author: 'Khaled Hosseini',
    },
    {
        bookName: 'The Theory of Everything',
        author: 'Steven Hawking',        
    },
    {
        bookName: 'Moby Dick',
        author: 'Herman Melville',        
    },
]

console.log(favBooks);

for(let e = 0; e <favBooks.length; e++){
    //console.log(e);
    console.log(e, favBooks[e].bookName);
}
