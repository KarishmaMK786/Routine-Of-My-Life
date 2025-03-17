let obj = {
    name:"ram",
    age:34,
    hobbies:["Coding", "Reading"],
    print:function() {
        console.log("Hello",this.name);
        console.log("Age is", this.age);
        let output = this.hobbies.join();
        console.log("Hobbies are",output);
    }
}
obj.print();