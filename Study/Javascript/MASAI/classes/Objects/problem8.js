// find the sum of an element whose occurence is 2;
let arr = [7, 2, 7, 7, 3, 3, 4, 2];

let obj = {};

for(let i=0; i<arr.length; i++)  {
    let num = arr[i];
    if(obj[num] == undefined) {
        obj[num] = 1;
    } else {
        obj[num]++;
    }
}
let sum = 0;
for(let key in obj) {
    let num = Number(key);
    if(obj[num] == 2) {
        sum = sum + num;
        
    }
    
}

console.log(sum);

