//Problem 2: Print the odd numbers from 0 till the given limit


let start = 0;
let limit = 20;

while(start <= limit) {
    if(start%2 != 0) {
        console.log(start);
    }
    start++;
}