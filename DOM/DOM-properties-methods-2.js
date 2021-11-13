// Property #4 => Traversing the DOM Properties

/*
1- parentElement
2- children
3- previousElementSibling
4- nextElementSibling
*/


//(1) parentElement
const para = document.querySelector("p");
console.log(para.parentElement);

//(2) children
const body1 = document.body;
console.log(body1.children);
console.log(body1.children[1]);
console.log(body1.children[0]);

//(3) previousElementSibling - (4) nextElementSibling
const sibling1 = document.querySelector('ul');
console.log(sibling1)

const sibling2 = document.querySelector('ul li:nth-child(3)');
console.log(sibling2)

const sibling3 = document.querySelector('ul li:nth-child(3)');
console.log(sibling3.previousElementSibling)

const sibling4 = document.querySelector('ul li:nth-child(2)');
console.log(sibling4.nextElementSibling)


// Property #5 => Style

const image = document.querySelector("img");
const parag = document.querySelector("p");
console.log(image);
console.log(parag);

image.style.width = "600px";
para.style.backgroundColor = "gray";
para.style.padding = "20px";
para.style.color = "white";
