let favoriteCharacter =
{
    fName: "Bob",
    lName: "Ross",
    hobbies: ["painting", "Animal Caring"],
    occupations: ["Drill Seargent", "Painting", "TV Personality"],
    age: 52,
    currentHealth: "Deceased",
}
//Calling the entire object
console.log(favoriteCharacter);
//Calling one the the property values
console.log(`My favorite character's first name is ${favoriteCharacter.fName}.`);
//Calling a property that has a ARRAY data type
console.log(`One of my favorite character's hobbies is ${favoriteCharacter.hobbies[1]}.`);
//This will update a property value
favoriteCharacter.currentHealth = "Alive and well in spirit!"
console.log(favoriteCharacter.currentHealth);
//Adding a new property to the object
favoriteCharacter.paintingSkills = "HE WAS SO GOOD!";
console.log(favoriteCharacter.paintingSkills)

let listOfMusic =
[
    {//1st Object
        title: 'Never Going To Give You Up',
        artist: 'Rick Astley',
        year: 1987
    }, //The Comma is the start of another object
    {//2nd Object
        title: "Black Magic Woman",
        artist: 'Santana',
        year: 1960
    }
]
let currentObjectLength = Object.keys(listOfMusic[0]).length; //Gives you the length of Properties in a object
console.log(`${currentObjectLength} is the number of properties.`)
console.log(listOfMusic[0]);
console.log(`Song Title: ${listOfMusic[0].title}`);
console.log(listOfMusic[1]);
console.log(`Song Title: ${listOfMusic[1].title}`);

let contactBook =
[
    { name: "Timothy", number: "228-334-6755", email: "Timothy@gmail.com" },
    { name: "Scott", number: "228-367-2475", email: "Scott@gmail.com" },
    { name: "Cindy", number: "601-445-3645", email: "Cindy@gmail.com" },
    { name: "Grace", number: "225-579-4242", email: "Gracey@gmail.com" }
]
function AddContact(newContact) //Add a Contact Method
{
    contactBook.push(newContact);
}
AddContact({name: "Joel", number: "601-660-0158", email: "joel.davis@mscoding.org"})
console.log(contactBook);

function ViewAllContacts() //View all Contacts Method
{
    console.log(contactBook);
}
function SearchByName(contactName) //SearchByName
{
    for (i = 0; i < contactBook.length; i++)
    {
        if (contactName == contactBook[i].name) {console.log(contactBook[i]);}
    }
}
//debugger
SearchByName("Cindy");
