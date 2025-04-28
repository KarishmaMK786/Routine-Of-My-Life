// how to take input in the JS

function runProgramm(input) {
    console.log(input);       // Every input from js will be form of String 
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgramm(read);
});