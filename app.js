let favoriteCharacter =
{
    fName: "Bob",
    lName: "Ross",
    hobbies: ["painting", "Animal Caring"],
    occupations: ["Drill Seargent", "Painting", "TV Personality"],
    age: 52,
    currentHealth: "Deceased",
};
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
];
function AddContact(ctcName, ctcNumber, ctcEmail) //Add a Contact Method
{
    let contactObject = { name: ctcName, number: ctcNumber, email: ctcEmail }; //ctcName is the name I/the user will enter 
    contactBook.push(contactObject);
}
AddContact("Joel", "601-660-0158", "joel.davis@mscoding.org")
console.log(contactBook);

function ViewAllContacts() //View all Contacts Method
{
    console.log(contactBook);
}
function SearchByName(contactName) //SearchByName
{
    for (i = 0; i < contactBook.length; i++)
    {
        if (contactName.toUpperCase() == contactBook[i].name.toUpperCase()) {console.log(contactBook[i]);}
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
];
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

//Movie Tracker
let movies =
[
    { title: "Fast 2 Furious", genre: "action", rating: 10 },
    { title: "The Exorcism", genre: "horror", rating: 7 },
    { title: "Step Brothers", genre: "comedy", rating: 8 },
    { title: "Me Before You", genre: "Romance", rating: 5 },
    { title: "Equalizer", genre: "thriller", rating: 9 }
];
function AddMovie(title, genre, rating)
{
    movies.push({ title: title, genre: genre, rating: rating });
}
AddMovie("Space Jam", "Fantasy", 6);

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

//Recipe
let recipes =
[
    { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
    { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
];
function Display(AnyDataYouChoose)
{
    console.log(AnyDataYouChoose);
}
function AddRecipe(title, ingredients, instructions)
{
    recipes.push({title: title, ingredients: ingredients, instructions: instructions});
}
AddRecipe("omelette", ["eggs", "butter", "milk", "cooking oil"], "Crack eggs in a bowl, add milk, and whisk until yolks break.");

function UpDateInstructions(recipeTitle, newInstructions )
{
    for (let i = 0; i < recipes.length; i++)
    {
        if (recipes[i].title == recipeTitle)
        {recipes[i].instructions = newInstructions};
    }
}
UpDateInstructions("Pancakes", "Add all ingredients then mix thoroughly.")
Display(recipes);

//Car Dealership Inventory
let cars =
[
    { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { make: "Honda", model: "Civic", year: 2019, price: 22000 }
];
function NewCar(carMake, carModel , carYear, carPrice)
{
    let newCar = { make: carMake, model: carModel, year:  carYear, price: carPrice };
    cars.push(newCar);
}
NewCar("Ford", "Mustang", 2006, 3000);
console.log(cars);

function PriceUpdate(carMake, newPrice)
{
    for (let i = 0; i < cars.length; i++)
    {
        if (cars[i].model.toLowerCase() == carMake.toLowerCase())
        {cars[i].price = newPrice};
    }
}
PriceUpdate("Mustang", 6000)
Display(cars);

//Pet Details
let pets =
[
    { name: "Rosco", type: "dog", age: 2 },
    { name: "Tom", type: "cat", age: 3 },
    { name: "Rio", type: "parrot", age: 1 },
    { name: "Bugsbunny", type: "rabbit", age: 4 }
];
function AddPet(petName, petType, petAge)
{
    let petArray = {name: petName, type: petType, age: petAge};
    pets.push(petArray);
}
AddPet("Daffy", "duck", 2);
Display(pets);