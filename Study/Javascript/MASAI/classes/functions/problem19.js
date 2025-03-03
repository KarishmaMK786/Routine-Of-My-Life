// using a reverse function write a function to check whether a string is palindrome or not


function rev_str(str) {
    let bag = "";
    for(let i=str.length-1; i>=0; i--){
    bag = bag+str[i];

    }
    return bag;
}

let name = "naman";
let reversed_name = rev_str(name);

function checkPalindrome (x,y) {
    if(x == y) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }    
}

checkPalindrome (name,reversed_name );



