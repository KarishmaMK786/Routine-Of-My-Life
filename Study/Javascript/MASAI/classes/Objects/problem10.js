// Objects and Array both are data structures

// Make a Data Set of Your own , Using Objects inside an Array


let data = [
    {name:"Karishma", age:25, email:"abc@gmail.com"},
    {name:"Nasreen", age:27, email:"cef@gmail.com"},
    {name:"Afreen", age:29, email:"ghi@gmail.com"},
]

console.log(data);

for(let key in data) {
    console.log(data[key].name);
}