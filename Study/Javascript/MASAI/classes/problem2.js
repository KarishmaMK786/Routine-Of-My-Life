// Find the average of even numbers between 1 to 50;

let limit = 50

let sum = 0;

let count = 0;


for(let i = 1; i<=limit ; i++) {
    if(i%2==0) {
        sum = sum+i;
        count = count+1;
    }
}
let average = sum/count;
console.log(average);

