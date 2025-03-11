

let student = {
    name : "Karishma",
    age : 25,
    gender : "Female",
    city : "Bangalore",
    hobbies : "Coding",
    smoking : false
}

console.log(student["name"]);
console.log(student["city"]);
console.log(student["smoking"]);

student.age = 27;
console.log(student);

student["age"] = 30;
console.log(student);