let name = "madam";
let reverseName = "";

for(let i=name.length-1;i>=0;i--){
    reverseName += name[i];
}

console.log(reverseName);

if(name == reverseName) {
    console.log("Given String is an Palindrome");
} else {
    console.log("Give String is not a Palindrome");
}