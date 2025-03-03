let str = "This Is Karishma ";

let arr  = [];

let bag = "";

for(i=0; i<str.length; i++) {
 
    if(str[i] != " ") {
        bag = bag + str[i];
    } else {
        arr.push(bag);
        bag = "";
    }
}

console.log(arr);

