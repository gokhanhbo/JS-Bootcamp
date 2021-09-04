//Object Literal ==> Object ==> key-value pairs
const address = {
    country: 'Turkey',
    city: 'Istanbul',
};

console.log(address);

//Accessing the object data ==> Method 1

console.log(address.city, "is very beautiful");
console.log(address.country, "'s biggest city is",address.city);
console.log(`${address.city} is a big city`);


//Accessing the object data ==> Method 2 => Array brackets

const person = {
    name: 'Sam',
    age: 31,
    'Full Address': 'Roma, Italy',
    job: 'Captain America',
    1985: 'DoB',
};

console.log(person.age);
console.log(person["age"]);
console.log(person["1985"]);
console.log(person["Full Address"]);
