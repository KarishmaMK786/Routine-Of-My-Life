let name = "masai";

// Printing the substring of name MASAi

for(let i=0; i<=name.length-1; i++) {
    for(let j=i; j<=name.length-1; j++) {
          let bag = "";
          for(let k=i; k<=j; k++) {
            bag += name[k];
          }
          console.log(bag);
        }
}