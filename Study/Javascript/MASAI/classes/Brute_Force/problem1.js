let N  = 5;
let K = 9;
let arr  = [3, 0, 6, 2, 7];

// Print the count of such a pair whose sum is K


let count = 0;
for(let i=0; i<N; i++) {
    for(let j=i; j<N; j++) {

        if(arr[i]+arr[j] == K) {
            count++;
        }
    }

}

console.log(count);