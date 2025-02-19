// public class Main {
//     public static void main(String[] args) {

//         int x = 10;
//         int y = 20;
//         if(x>y) {
//             System.out.println("x is greater than y");
//         } else if(x<y) {
//             System.out.println("x is lesser than y");
//         } else {
//             System.out.println("Invalid Output");
//         }
  
//     }
// }


// public class Main {
//     public static void main(String[] args) {

//         int x = 10;
//         int y = 20;

//         String result = (x < y) ? "x is lesser than y" : "y is lesser than x" ;
//         System.out.println(result);


//     }
// }


// public class Main {
//     public static void main(String[] args) {
//         int doorCode = 1337 ;
//         if(doorCode == 1337) {
//             System.out.println("code is correct, door opens now");
//         } else {
//             System.out.println("invalid doorCode");
//         }

//         String result = (doorCode == 1337) ? "code is correct , door opens now" : "Invalid doorCode , Please try again" ;
//         System.out.println(result);
//     }
// }


// public class Main {
//     public static void main(String[] args) {
//         int myNum = 5 ;
//         if(myNum % 2 == 0) {
//             System.out.println("myNum is Even");
//         } else {
//             System.out.println("myNum is odd");
//         }
//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         int day = 4;

//         switch(day) {

//             case 1:
//             System.out.println("Monday");
//             break;
            
//             case 2:
//             System.out.println("Tuesday");
//             break;

//             case 3:
//             System.out.println("Wednsday");
//             break;

//             case 5:
//             System.out.println("Friday");
//             break;

//             case 6:
//             System.out.println("Saturday");
//             break;

//             default:
//             System.out.println("There is no Match, Thank You");


//         }

//     }
// }


// public class Main {
//     public static void main(String[] args) {

//         int i = 0;

//         // while( i < 5) {
//         //     System.out.print(i + " ") ;
            
//         //     i++;
            
//         // }

//         do {
//             System.out.println(i);
             
//             i++;
//         }

//         while (i == 0);
//     }
// }

// public class Main {
//     public static void main(String[] args) {

//         int countDown = 3 ; 

//         while (countDown > 0) {
//             System.out.println(countDown);

//             countDown --;
//         }

//         System.out.println("Happy Coding Journy");

//     }
// }


// public class Main {
//     public static void main(String[] args) {
//         int dice = 1;
//         while (dice <= 6) {
//             if (dice < 6) {
//                 System.out.println("No Yatzy");
//             } else {
//                 System.out.println("yatzy");
//             }

//             dice++;
//         }
//     }
// }




// public class Main {
//     public static void main(String[] args) {
//         for(int i = 0; i < 0 ; i++) {
//             System.out.println(i);
//         }
//     }
// }


// public class Main {
//     public static void main(String[] args) {
//         System.out.println("Hello World");

//         for (int i = 0; i <= 10; i = i + 2) {
//             System.out.println(i);
//         }
//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         for(int i=1; i<=2; i++) {
//             System.out.println(i);

//             for(int j=1; j<=3; j++) {
//                 System.out.println(j);
//             }
//         }
//     }
// }


// public class Main {
//     public static void main(String[] args) {
//         String cars[] = {"BMW", "volvo"} ;

//         for(String i : cars) {
//             System.out.println(i);
//         }

//     }
// }

// public class Main {
//     public static void main(String[] args) {

//         for(int i=0; i<=5; i++) {
//             if(i==3) {
//                 continue;
//             }

//             System.out.println(i);
//         }
//     }

// }


// public class Main {
//     public static void main(String[] args) {
//         int[] myNum = {1, 2, 3, 4, 5};

//         // for(int i : myNum) {
//         //     System.out.println(i);
//         // }

//         System.out.println(myNum[4]);

        

//     }
// }

// public class Main {
//     public static void main(String[] args) {

//         int[] ages = {10, 20, 30, 40, 54, 76, 67};

//         float avg, sum = 0;

//         int length = ages.length;

//         for (int age:ages) {
//             sum += age;
//         }

//         avg = sum/length;

//         System.out.println(sum);
//         System.out.println(length);
//         System.out.println(avg);
//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         int[][] arr = { {1,2,3,4,5}, {6,7,8}};
//         System.out.println(arr[1][0]);
//    }

// }