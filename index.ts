let x: number = 1; //type inferencing
console.log(x);

let y: number | string = 1;
y = "rudduu";
console.log(y);

let z: any = 1;
z = true;
z = "anything";

//part-1

function greeting(firstName: any) {
  //explicitly u can assign it any
  console.log("hello" + firstName);
}

function greetings(firstName: String) {
  //explicitly u can assign it any
  console.log("hello" + firstName);
}
greeting(10);
// greetings(20) - this will return an error
greetings("hello");

function greet(firstName: String | number) {
  //explicitly u can assign it any
  console.log("hello" + firstName);
}

greet(10);
greet("monty");

//problem 2

function sum(a: number, b: number) {
  return a + b; //typescript cant give logical error
}

let ans = sum(10, 20);
console.log(ans);

//==================================================================================//
