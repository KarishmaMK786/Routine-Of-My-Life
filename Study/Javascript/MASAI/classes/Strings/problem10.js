// I want to change _ to %;

let name = "Aman_Singh";

let updatedName = "";

for(let j=0; j<=name.length-1; j++) {
     if(name[j] == "_") {
        updatedName += "%";
     } else {
        updatedName += name[j];
     }
}

console.log(updatedName);