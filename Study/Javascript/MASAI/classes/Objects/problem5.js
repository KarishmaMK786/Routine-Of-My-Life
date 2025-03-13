// Given a string , so print the number of times each character appears

let str = "masai";

let obj = {};
 for(let i=0; i<str.length; i++) {
    let char = str[i];
    obj[char] = 1;
 }


 for(let i=0; i<str.length; i++) {
    for(let j=i+1; j<str.length; j++) {
        
        if(str[i] == str[j] ) {

            obj[str[i]] ++;
        }

    }
 }

 console.log(obj);
