// Loops in Multidimensional Array


let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

 let rows = arr.length;
  let cols  = arr[0].length;

 for(let i=0; i< rows; i++) {
    let bag = "";
    for(let j=0; j<cols; j++) {
        bag = bag + arr[i][j] + " ";
    }

    console.log(bag);

 }