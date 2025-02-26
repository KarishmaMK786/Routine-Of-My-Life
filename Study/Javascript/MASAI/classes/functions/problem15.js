let global = 10;

function sham() {
    let local1 = 10;
    console.log(local1);    // local scope
    console.log(global);     // global scope
}

function ram() {
    let local2 = 20;
    console.log(local2);  // local scope
    console.log(global);  // global scope

}


sham();
ram();
