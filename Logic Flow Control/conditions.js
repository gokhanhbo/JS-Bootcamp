// if Statement 
//
// if(the condition) {
//     run this code
// }

//Example-1
if("Tom" === "Tom"){
    console.log("Yay Tom");
}

//Example-2
if("Jack" === "Tom") {
    console.log("No Way");
}
else{
    console.log("woww");
}

//Example-3
let time = 0700
if(time === 0700){
    console.log("It is the right time!");
}
else{
    console.log("Wait for the right time!");
}


//Example-1
let score = 9.5;

if(score === 10){
    console.log("Great A");
}
else if(score === 9) {
    console.log("Great B");
}
else{
    console.log("Great C");
}

console.log("-------------------")
// Switch Statement 
//

let score2 = 8;

switch(score2){
    case 10: 
        console.log("Great A");
        break;
    case 8: 
        console.log("Great B");
        break;
    case 6: 
        console.log("Great C");
        break;
    case 2: 
        console.log("Great D");
        break;
    default:
        console.log("Not Great");
}
