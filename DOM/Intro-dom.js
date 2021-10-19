// DOM => Document Object Model => Link the JS object to the HTML Doc

// Selecting Methods => Getting HTML Elements by Their Class

const heading = document.getElementsByClassName("title");
console.log(heading);

// Selecting Methods => Getting HTML Elements by Their ID

let dogImage = document.getElementById("dog-img");
console.log(dogImage);

// Selecting Methods => querySelectorAll => It selects all elements that share that sellector

var dogTraits = document.querySelectorAll('.item');
console.log(dogTraits);

// Selecting Methods => querySelectorAll => It selects one element that has the selector

let dogImg = document.querySelector('#dog-img');
console.log(dogImg);

