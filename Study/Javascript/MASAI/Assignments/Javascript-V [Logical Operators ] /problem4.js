//Problem 4: Given 3 numbers (all different values), print which is greatest
 
let a = 10;
let b = 23;
let c = 43;

if(a>b && a>c) {
    console.log("a is greater");
} else if(b>a && b>c) {
    console.log("b is greater");
} else if(c>a && c>b) {
    console.log("c is greater");
} else {
    console.log("All are equal");
}