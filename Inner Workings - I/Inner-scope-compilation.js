// Example-1 -> Shows the compilation
var x = 10;
console.log(x);

//const y;

// Example - 2 -> Compilation /parsing

var novel = "Dune"; // GlobalScope

function otherBook(){ // Global Scope
    var novel = "Moby Dick"; //Function Scope
    console.log("Some Book");
}

function writeBook(){ // Global Scope
    var writeNovel = "Why?"; // Function Scope
    console.log(writeNovel);
}

otherBook();
writeBook();