let arr1 = [5, 6, 7];
let arr2 = [3, 7, 9];

// printing those element which is common in both arrays and if nothing is common the print the -1


let flag = 0;

for (let i = 0; i<arr1.length; i++) {
    for(let j=0; j<arr2.length; j++) {
        if(arr1[i] == arr2[j]) {
            console.log(arr1[i]);
            flag = true;
            break;
        }
    }
}

if(flag == false) {
    console.log(-1);
}