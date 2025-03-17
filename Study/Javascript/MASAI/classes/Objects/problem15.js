// write a mothod for your name and place where you are from

let detaills = {
    name: "Karishma MK",
    place: "Munavalli",
    print: function() {
       console.log("My name is",this.name,"and I'm from", this.place,".");
    }

}

detaills["print"]();