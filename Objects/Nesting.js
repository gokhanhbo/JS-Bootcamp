//Nesting Objects Within Objects

const user = {
    thunderBolt37: {
        name: 'Ross',
        job: 'classified',
    },
    payGrade: "A",
};


console.log(user);
console.log(user['thunderBolt37']);
console.log(user['thunderBolt37'].name);
console.log(user["thunderBolt37"]["job"]);

// Nesting Arrays Within Objects

const kullanici = {
    admin: {
        name: 'Gokhan',
        job: 'Engineer',
    },
    hobies: ["walk","bycyle","swim"],
    age: 37,
};


console.log(kullanici);

// Objects : 
console.log(kullanici["admin"]["name"]);
console.log(kullanici["admin"].job);

// Arrays:
console.log(kullanici["hobies"][2]);
console.log(kullanici["hobies"][0]);


// Nesting Objects Within Arrays

const liste = [
    {
        name: 'Meryem',
        job: 'Technician'
    },
    'yas',
    ['making suits', 'destroying suits']
];


console.log(liste);

console.log(liste[0]);
console.log(liste[0].job);
console.log(`${liste[0].name}in isi ${liste[0].job}dir`)






