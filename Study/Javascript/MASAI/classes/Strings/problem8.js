let string = "Clark Kent"  // want to add $ sign in space

//step1 = Changing the string into array

let arr = [];

for(let i=0; i<=string.length-1; i++) {
    arr.push(string[i]);
}

// step2 = changing the space into $ sigh

arr[5] = "$";
console.log(arr);

// step3 = converting array into string

let result = "";

for(let j=0; j<=arr.length-1; j++) {
    result += arr[j];
}

console.log(result);



