"use strict";
var b = 4;
function outer() {
    // var b = 5;
    function inner() {
        b++;
        // var b = 6;
        console.log(b);
    }
    inner();
}
outer();

// "use strict";

// var b = 4;

// function outer(){
//     var b = 5
// }