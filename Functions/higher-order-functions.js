//Higher Order Functions


// (1) Functions accepting other functions as arguments
function repeat(x){
    x();
    x();
}
function num(){
    console.log(2+5)
}
repeat(num); // the num() functions is actually a callback function


// (2) Functions accepting other functions as returned values ==> factory functions
function sum(y) {
    return function (z) {
        return y + z
    };
};
let num1 = sum(3); // y'ye değer atıyoruz..
let num2 = sum(115);
console.log(num1(4)); // z'ye bu şekilde ulaşıyorum...
console.log(num2(551))

// Callback functions

//Example-1

setTimeout(function () {
    console.log(2+2);
}, 500);

//Example-2 (DOM)

const btn = document.querySelector('button');
const para = document.querySelector('p');
btn.addEventListener('click', function(){
    para.classList.add("active");
});

// Example-3 








