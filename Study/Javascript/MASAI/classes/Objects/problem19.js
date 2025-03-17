let obj = {
    name:"ram",
    age:34,
    hobbies:["Coding", "Reading"],
    print:function() {
        console.log("Hello",this.name);
        console.log("Age is", this.age);
        let output = "hobbies are ";

        for(let i=0;i<this.hobbies.length;i++) {
            if(i == this.hobbies.length-1) {
                output = output + this.hobbies[i];

            } else {
                output = output + this.hobbies[i] + ", ";
            }
            

        }
        console.log(output)
    }
}
obj.print();