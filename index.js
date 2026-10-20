"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1; //type inferencing
console.log(x);
let y = 1;
y = "rudduu";
console.log(y);
let z = 1;
z = true;
z = "anything";
//problem-1
function greeting(firstName) {
    //explicitly u can assign it any
    console.log("hello" + firstName);
}
function greetings(firstName) {
    //explicitly u can assign it any
    console.log("hello" + firstName);
}
greeting(10);
// greetings(20) - this will return an error
greetings("hello");
function greet(firstName) {
    //explicitly u can assign it any
    console.log("hello" + firstName);
}
greet(10);
greet("monty");
//problem 2
function sum(a, b) {
    return a + b; //typescript cant give logical error
}
let ans = sum(10, 20);
console.log(ans);
//problem-3
function age(x) {
    if (x > 18) {
        return true;
    }
    else
        return false;
}
console.log(age(55));
//==================================================================================//
//# sourceMappingURL=index.js.map