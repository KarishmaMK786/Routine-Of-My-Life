let arr = [34, 56, 78, 25, 5467, 1, 3, 5];

let maxNum = -Infinity;

for(let i=0; i<=arr.length-1; i++) {
    if(arr[i] > maxNum) {
        maxNum=arr[i];
    }
}

console.log(maxNum);