function getProducts(i) {
    let products = ["macbook", "ipad", "iphone","airpods"];
    if(i>products.length-1 || i<0) {
        return null;
    }
    return products[i];
}

let x = getProducts(2);
if(x === null){
    console.log("Item not present");
} else {
    console.log(x);
}
