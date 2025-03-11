let num = 123;
let num1 = num;
let revNum = 0;
let rem ;
while (num1 > 0) {
    rem = num1 % 10;
    num1 = Math.floor(num1 /10) ;
    revNum = revNum * 10 + rem;
}
if(num == revNum) {
     console.log("Number is Palindrome");
} else {
    console.log("Number is not a Palindrome");
}