let rectangle = {
    length:9,
    width:6,
    area:function(){
        return this.length * this.width;
       
 
    },
    perimeter:function(){
        return(2 * this.length) + (2 * this.width);
        
 
    },
    
}

let area = rectangle["area"]();
let perimeter = rectangle["perimeter"]();

console.log(area, perimeter);