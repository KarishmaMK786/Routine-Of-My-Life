let arr = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];

let rows = arr.length;
let columns = arr[0].length;

for(let i=0; i<columns; i++) {
    let result = "";
    for(let j=0; j<rows; j++) {
        result = result + arr[j][i] + " ";
    }
    console.log(result);
}



// Converting in the form of Index
