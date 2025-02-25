// I want to change Donald Ronald
let str = "Donald" ;

let bag = "";
for(let i=0; i<=str.length-1; i++) {
    if(i == 0) {
        bag += "R";
    } else {
        bag += str[i]; 
    }
}

console.log(bag);