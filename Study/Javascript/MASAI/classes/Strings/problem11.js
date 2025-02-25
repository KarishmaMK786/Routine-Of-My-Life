// counting the name starting from "A";
let names = ["Amit", "Nrupul", "Pulkit", "Yogesh", "Amar", "Varun"];

let count = 0;

for(let i=0; i<=names.length-1; i++) {

    let str = names[i];
    if(str[0] == "A") {
        count++;
    }

}
console.log(count);

