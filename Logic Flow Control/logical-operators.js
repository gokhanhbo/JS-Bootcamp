// The Logical AND (&&) Operator

//Example-1
if(10>5 && 5>4) {
    console.log("Success")
}

//Example-2
if(10>5 && 5>5) {
    console.log("Success")
}
else{
    console.log("Fail")
}

//Example-3

let age = 33;

if(age>=0 && age<=12){
    console.log("minor");
}
else if(age >= 13 && age <= 19){
    console.log("teenager");
}
else {
    console.log("adult")
}


// The Logical OR (||) Operator

//Example-1
if(2>3 || 5<7){
    console.log("success");
}

//Example-2

if(10>8 || 8 >5){
    console.log("success"); 
}

// The Logical NOT (!) Operator

let temp = 22;

if(!(temp === 20)) {
    console.log("Normal");
}