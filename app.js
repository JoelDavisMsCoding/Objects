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

//Personal Contact Book
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
SearchByName("Cindy");

//Student Grade Management
let students =
[
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
]
function GradeAverage()
{
    let average = 0;
    let grdTotal = 0;
    for (let i = 0; i < students.length; i++)
    {
        grdTotal += students[i].grade;
    }
    average = grdTotal / students.length;
    return average;
}
let grdeAvg = GradeAverage();+
console.log(`Class Average: ${grdeAvg}`)

function BelowAverage()
{
    arrBloAvg = []
    for (let i = 0; i < students.length; i++)
    {
        if (students[i].grade < grdeAvg)
        {
            arrBloAvg.push(students[i]);
        }
    }
    console.log(arrBloAvg);
}
BelowAverage();

//Book Tracker
let movies =
[
    { title: "Fast 2 Furious", genre: "action", rating: 10 },
    { title: "The Exorcism", genre: "horror", rating: 7 },
    { title: "Step Brothers", genre: "comedy", rating: 8 },
    { title: "Me Before You", genre: "Romance", rating: 5 },
    { title: "Equalizer", genre: "thriller", rating: 9 }
]
function AddMovie(newMovie)
{
    movies.push(newMovie)
}
AddMovie({ title: "Harry Potter", genre: "fantasy", rating: 3 });
console.log(movies);

function RateMovie(title, newRating)
{
    for (let i = 0; i < movies.length; i++)
    {
        if (movies[i].title == title)
        {
            movies[i].rating = newRating;
        }
    }
}
RateMovie("Harry Potter", 1);

function ViewMovies()
{
    console.log(movies);
}
ViewMovies();

//Library Book Tracker
let books =
[
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
];
function BksAvailable()
{
    let arrAvailable = [];
    for (let i = 0; i < books.length; i ++)
    {
        if (books[i].status == "available")
        {arrAvailable.push(books[i]);}
    }
    return arrAvailable;
}
function BksUnAvailable()
{
    let arrUnAvailable = [];
    for (let i = 0; i < books.length; i ++)
    {
        if (books[i].status != "available")
        {arrUnAvailable.push(books[i]);}
    }
    return arrUnAvailable;
}
let availableBks = BksAvailable();
let unAvailable = BksUnAvailable();
console.log(availableBks);
console.log(unAvailable);

//Classes
class Car
{
    constructor(make, model,)
    {
        this.make = "";
        this.model = "";
        this. speed = 0;
    }

    Accelerate(mph)
    {
        this.speed += mph;
        console.log(`MPH: ${this.speed}`);
    }
    Break(mph)
    {
        this.speed -= mph
        console.log(`MPH: ${this.speed}`);
    }
}
const mustang = new Car();
mustang.Accelerate(35);
mustang.Break(10);

class Employee
{
    constructor(name, title, catchPhrase)
    {
        this.name = name, this.title = title, this.catchPhrase = catchPhrase;
    }
    Introduce()
    {
        console.log(`Hi I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`)
    }
}
class Animal
{
    speak()
    {
        console.log("some animal noise");
    }
    nap()
    {
        console.log("zzz");
    }
}
class Dog extends Animal
{
    speak()
    {console.log("bark");}
}
class Cat extends Animal
{
    speak()
    {console.log("meow");}
}
speak();
function speak()
{
    console.log("speak override");
}