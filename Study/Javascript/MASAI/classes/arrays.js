
//Arrays
let names = ["Karishma", "Nasreen", "Afreen", "Mahi", "Minsa", "Zain"];
console.log(names);
console.log(names.length); // length

names.push("Mom");        //push
console.log(names);

names.push("Dad");       
console.log(names);

names.pop();              //pop- removing value from end
names.pop();
console.log(names);



console.log(names[2]);

let item = names.length;
console.log(names[item-1]);
names[item] = "Waiting for new baby";
console.log(names);


let marks = [34, 56, 67, 34, 87];     // number array
console.log(marks);
console.log(marks.length);
console.log(marks[2]);
 
let data = ["karishma", 100, true];    //Mixed Array
console.log(data);
console.log(data.length)


//Printing arrays through for loop
//let names = ["Karishma", "Nasreen", "Afreen", "Mahi", "Minsa", "Zain"];

for (let i=0; i<names.length; i++) {
    console.log((i+1)+". "+names[i]);
}