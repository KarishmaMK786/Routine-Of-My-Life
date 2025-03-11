let name = "masai";
let count = 0;


// finding the count of an Substring which having same letter at the starting and the Ending point

for(let i=0; i<=name.length-1; i++) {

    for(let j=i; j<=name.length-1; j++) {
        let substr = "";
       
        for(k = i; k<=j;k++){
            substr += name[k];
        }
        if(substr[0] == substr[substr.length-1]){
            count++;
        }
      
    }
    
}

console.log(count);

//I wanna become React Native Developer 


// And I can get it done 
