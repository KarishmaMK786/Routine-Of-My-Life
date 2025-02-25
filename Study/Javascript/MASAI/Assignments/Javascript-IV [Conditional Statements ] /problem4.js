//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let storedUsername = "abc@gmail.com";
let storedPassword = "Allah@786";

let inputUsername = "abc@gmail.com";
let inputPassword = "Allah@786";

if(storedUsername == inputUsername) {
    if(storedPassword == inputPassword) {
        console.log("You can login");
    } else {
        console.log("Invalid password");
    }
} else {
    console.log("Invalid mail ID ");
}