let details = {
    name : "Karishma",
    age : 26,
    job : "Student",
    city : "Bangalore",
    Hobby : "Coding"
}

for(let key in details){
    console.log(key, details[key]);
}

// If you want all keys from Objects in the form of array

console.log(Object.keys(details));


// If you want all VALUES from Objects in the form of array

console.log(Object.values(details));