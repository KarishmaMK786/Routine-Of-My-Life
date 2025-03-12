
let substring = "naman";

let palindrome = "";


for(let j= substring.length-1; j>=0; j--) {
    palindrome = palindrome + substring[j];
}

if(substring == palindrome) {
    console.log(substring, palindrome);
}




