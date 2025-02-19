
// rahul went to eat Golgappa - person1

//what if Rahul went with his family of 3 more extra people--> rahul + family = 4 person;

// problem-1

let golgappa;

let person;

for(person = 1;person<=4;person++ ){
    for(golgappa = 1;golgappa <= 4;golgappa++) {

        console.log("Eating",person ,golgappa) ;
    }
}

// problem 2
//total farm = 5 and planting the each form with 10 seeds

for(let farm=1; farm<=5; farm++) {

    let plant = " "
    for(let seeds=1; seeds<=10; seeds++) {
        plant = plant + seeds + " ";
    }
    console.log("farm",farm,"-->" ,plant);
}

// problem 3
// farm 1 - * (1 seed)
// farm 2 - * (2 seed)
// farm 3 - * (3 seed)
// farm 4 - * (4 seed)
// farm 5 - * (5 seed)

// *
// **
// ***
// ****
// *****

for (let i = 1;i <= 5;i++) {

    let seeds = "";
    for(let j=1; j<=i;j++){
        seeds = seeds + "*";
    }
    console.log(seeds);
}


// problem 4

/*
* * * * *
* * * *
* * *
* *
*
*/



for (let i = 5;i >=1;i--) {

    let seeds = "";
    for(let j=1; j<=i;j++){
        seeds = seeds + "*";
    }
    console.log(seeds);
}


// problem 5

for (let i = 5;i >=1;i--) {

    let seeds = "";
    for(let j=1; j<=i;j++){
        seeds = seeds + j   ;
    }
    console.log(seeds);
}


// problem 6

for( let i=1; i<=5;i++) {
    console.log(i);
    let star = "";
    for(let j=1;j<=i;j++){
        star = star+"*";

    }
    console.log(star);
}

// problem 7

for(let i=1; i<=5; i++) {
    let num = "";
    let star= "";
    for(let j=1; j<=i;j++) {
        num = num + i + " ";
        star = star + "*" + " ";
    }
    console.log(num);
    console.log(star);
}