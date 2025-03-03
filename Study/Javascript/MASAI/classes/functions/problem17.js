 function check(number) {
    if(number % 2 == 0) {
        return true;
    } else {
        return false;
    }
 }

 let arr = [1,2,3,4,5,6,7,8,9];

 let sum_even = 0;

for(let i=0; i<=arr.length-1 ; i++) {
    if(check(arr[i]) == true){
        sum_even += arr[i];
    }
    
}

console.log(sum_even);



let sum_odd = 0;

for(let i=0; i<=arr.length-1 ; i++) {
    if(check(arr[i]) == false){
        sum_odd += arr[i];
    }
    
}

console.log(sum_odd)    ;