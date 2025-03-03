// write a code to reverse a string

function reverseString(name) {
   

    let reverse = "";

    for(let i=name.length-1; i>=0; i--) {
        reverse += name[i];
    }

    console.log(reverse);
}

reverseString("Karishma");