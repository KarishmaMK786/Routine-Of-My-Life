let items1 = ["A", "B", "C", "D"];
// console.log(items1);

let items2 =   [
                   ["A", "B", "C"],
                   ["D", "E", "F"],
                   ["G", "H", "I"]
               ];

                
// console.log(items2);
// console.log(items2[2]);

for(let i=0; i<items2.length; i++) {
    for (j=0; j<items2[i].length; j++) {
        console.log(items2[i][j]);
    }

    console.log("****");
 }
