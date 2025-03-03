// write a function to multiply elements of two arrays and store the product in new array



function multiply(a,b) {
    let output = [];

    for(let i=0; i<a.length; i++) {
        let product = a[i] * b[i];
        output.push(product);
    }

    return output;
}

let arr1 = [20, 40, 60, 80];
let arr2 = [1, 2, 3, 4];

let result = multiply(arr1, arr2);

console.log(result);