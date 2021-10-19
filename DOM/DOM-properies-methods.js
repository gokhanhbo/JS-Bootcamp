// Propery #1 => innerText

const para = document.querySelector('p');
console.log(para.innerText);

// Propery #2 => textContent

const para1 = document.querySelector("p");
console.log(para1.textContent);


// Propery #3 => innerHTML

//Example-1
const ul = document.querySelector("ul");
console.log(ul.innerHTML);

// Example-2
const ul1 = document.querySelector("ul");
ul.innerHTML += "<li>Item 4</li>"; //HTML koduna canlıda ek yapıyorsun..
console.log(ul.innerHTML);




// Method #1 => getAttribute()
const att = document.querySelector("img");
console.log(att.getAttribute("id"));

// Method #2 => setAttribute()
const att2 = document.querySelector("img");
att2.setAttribute('class','paragraph'); //HTML kodunda img sınıfına paragraph isimli classı ekledi.
console.log(att2.getAttribute("class"));






