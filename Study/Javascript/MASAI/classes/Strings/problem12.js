// count the names which containis A or a

let names = ["Amit", "Nrupul", "Pulkit", "Yogesh", "Amar", "Varun"];

let count = 0;

for(let i=0; i<=names.length-1; i++) {

    let str = names[i];
    for(let j=0;j<=str.length-1;j++) {
        if(str[j] == "A" || str[j] == "a") {
            count++;
            break;
        }
    
    }
  
}
console.log(count);