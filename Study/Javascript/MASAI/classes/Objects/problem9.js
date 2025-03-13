// find the element whose occurence is one 

let arr = [7, 2, 7, 7, 3, 3, 4, 2];

let obj = {};

for(let i=0; i<arr.length; i++) {
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    } else {
        obj[arr[i]]++;
    }
}

for(let key in obj) {
    if(obj[key] == 1){
        console.log(key);
    }
}