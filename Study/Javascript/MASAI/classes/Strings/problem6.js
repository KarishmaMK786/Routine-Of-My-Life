let string = "Karishma Khondunaik";
string += "H"
console.log(string); // Adding to Stirng -- Concatination

let jhola = ""                            // Removing last char from the string
for(let i =0; i<=string.length-2;i++) {
     jhola+=string[i];
}

console.log(jhola);