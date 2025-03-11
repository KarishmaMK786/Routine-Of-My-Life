// Updating the value using Bracket and Dot Notation

let details = {
    name : "Karishma",
    age : 26,
    job : "Student",
    city : "Bangalore",
    Hobby : "Coding"
}

details["name"] = "Karishma MK";
details.age = 27;
console.log(details);


// Adding values in Objects

details.studies = "BSc";
console.log(details);

// deleting 

delete details.age;
console.log(details);

delete details["studies"];
console.log(details);
