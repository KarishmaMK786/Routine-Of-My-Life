//Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let age = 1985;
let ageDefine = 2025 - age;

if(ageDefine >= 13 && ageDefine <=19 ) {
    console.log("Teenage");
} else if(ageDefine>=20 && ageDefine<=29){
    console.log("Twenties");
 
} else {
    console.log("Input is not according to the given problem, Thank You, Please try with valid input");
}
