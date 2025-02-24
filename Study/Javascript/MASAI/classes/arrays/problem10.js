// Removing last 3 elements from an array

let arr = [1,2,3,4,5,6];

for(let i =0; i <= arr.length-1; i++) {

    if(arr.length-3 == i) {
        break;
    } 
    console.log(arr[i]);
   
}