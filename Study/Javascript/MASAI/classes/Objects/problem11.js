// Get the Products name and Rating whose ratings are above and equal to 4.

let data = [
    {name:"speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation", price:50000, rating:5},
    {name:"watch", price:3000, rating:4}
];


for(let i=0; i<data.length; i++) {
    if(data[i].rating>=4) {
        console.log(data[i].name, "-->", data[i].price);
    }
}