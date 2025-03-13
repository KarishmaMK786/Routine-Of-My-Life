// How many times the numbers are present in Array

let arr = [7, 2, 7, 7, 3, 4, 2];

let obj = {};

for(let i=0; i<arr.length; i++)  {
    let num = arr[i];
    if(obj[num] == undefined) {
        obj[num] = 1;
    } else {
        obj[num]++;
    }
}
for(let key in obj) {
    console.log(key , "->", obj[key]);
}