var details = {
    name : "karishma",
    age : 32,

    print : function(msg) {
        console.log("Hello", msg);
        console.log(this.name);
    }
}

let x = "Everyone";
details.print(x);  // calling an Object Method


