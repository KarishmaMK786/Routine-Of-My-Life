// converting string array into number array 

let x = ["10", "20", "30", "40"];

let res = [];

for(let i = 0; i<=x.length-1; i++) {
    res.push(Number(x[i]));
}

console.log(res);

console.log(typeof(res)); 


// Instead of doing this conversation as we did above 

// use map which can convert easily string array into number array 

console.log(x.map(Number));  // map is an inbuilt function and which map each and every element in the array and will retrun in the form of array as a result

