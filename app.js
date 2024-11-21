let people = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        occupation: "Engineer",
        contact: {
            email: "alice@example.com",
            phone: "123-456-7890"
        },
        address: {
            city: "New York",
            country: "USA"
        }
    },
    {
        id: 2,
        name: "Bob",
        age: 25,
        occupation: "Designer",
        contact: {
            email: "bob@example.com",
            phone: "987-654-3210"
        },
        address: {
            city: "Los Angeles",
            country: "USA"
        }
    },
    {
        id: 3,
        name: "Charlie",
        age: 35,
        occupation: "Teache",
        contact: {
            email: "charlie@example.com",
            phone: "555-555-5555"
        },
        address: {
            city: "Chicago",
            country: "USA"
        }
    },
    {
        id: 4,
        name: "Diana",
        age: 28,
        occupation: "Doctor",
        contact: {
            email: "diana@example.com",
            phone: "222-333-4444"
        },
        address: {
            city: "Houston",
            country: "USA"
        }
    }
];
  
  
let cars = [
    {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        owner: {
            name: "Alice",
            id: 1
        },
        specs: {
            color: "Blue",
            engine: "1.8L",
            transmission: "Automatic"
        }
    },
    {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2018,
        owner: {
            name: "Bob",
            id: 2
        },
        specs: {
            color: "Red",
            engine: "2.0L",
            transmission: "Manual"
        }
    },
    {
        id: 3,
        make: "Ford",
        model: "Focus",
        year: 2021,
        owner: {
            name: "Charlie",
            id: 3
        },
        specs: {
            color: "White",
            engine: "1.5L",
            transmission: "Automatic"
        }
    },
    {
        id: 4,
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        owner: {
            name: "Diana",
            id: 4
        },
        specs: {
            color: "Black",
            engine: "Electric",
            transmission: "Automatic"
        }
    }
];

document.getElementById("options").innerHTML = `<button id="filt" onclick="filt()">Filter</button>`;
let out = document.getElementById("content");

people.map(person => card(person));

function card(person) {
    out.innerHTML += `<div class="card"><h1>${person.name}</h1><p>Age: ${person.age}</p><h2>Occupation: ${person.occupation}</h2></div>`; 
}

let res = people.filter(person => {return person.occupation == "Teacher"});

console.log(res);

console.log(res[0].name);

function filt() {
    out.innerHTML = "";
    res.map(person => card(person));
}


