// For loops
// (1) a variable is defined ( a starting point)
// (2) the ending point is defined
// (3) how much the variable is incremented

/*
for(initialExpression; condition; incrementExpression){
    the code that we want to run
}
*/

// Example-1

for(let a = 1; a<=5; a++) {
    console.log('I am a for loooop =>', a);
}

//Example-2 ==> get the even numbers from 0-19

for(let b = 0; b <= 19; b += 2) {
    console.log("Even numbers are :", b);
};


//Example-3 ==> get the odd numbers from 0-20

for(let c = 1; c <= 20; c += 2) {
    console.log("Odd numbers are :", c);
};

//Example-4 ==> get every third number from 0-20

for(let d = 0; d <= 20; d += 3 ) {
    console.log("3+ numbers are :", d)
}
// let d = 0 ==> starting point
// d <= 20 ==> ending point
// d += 3 ==> increment expression
// console.log... ==> the code we want to run.





