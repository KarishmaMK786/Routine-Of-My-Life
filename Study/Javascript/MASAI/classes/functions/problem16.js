// write a m function to check is the number is even or not , If it is even retun the true else return the false.

 function checkTheNumber(number) {
      if(number%2 == 0){
        return true;
      } else {
        return false;
      }
 }

let ans = checkTheNumber(0);
 if(ans == true) {
    console.log("number is Even");
 } else {
    console.log("number is Odd");
 }