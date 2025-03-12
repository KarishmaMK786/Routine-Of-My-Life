let s = "thisracecarisgood";


// have to find longest length of the Palindrome substring

// 1st step is to print the substring
// 2nd step is to check wether its palindrome is not
//3rd step is maximize the length between Palindrome string
//4th step is to print the length of the biggest palindrome string

let maxLength = 0;

for(let i=0; i<s.length; i++) {      //t
    for(let j=i; j<s.length; j++) {  
        
        let substring = "";   //t -    
        for(let k=i; k<=j; k++){
            substring = substring + s[k];
        }


        let palindrome = "";
        
        
        for(let j= substring.length-1; j>=0; j--) {
            palindrome = palindrome + substring[j];
        }
        
        if(substring == palindrome) {
           if(substring.length>maxLength) {
            maxLength = substring.length;
           }
        }
        
    
    }
}

console.log(maxLength);