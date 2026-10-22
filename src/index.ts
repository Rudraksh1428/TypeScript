let x: number = 1; //type inferencing
console.log(x);

let y: number | string = 1;
y = "rudduu";
console.log(y);

let z: any = 1;
z = true;
z = "anything";

//problem-1

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

//problem-3

function age(x: number): boolean {
  if (x > 18) {
    return true;
  } else return false;
}

console.log(age(55));

//problem-4

function one(fn: () => void) {
  setTimeout(fn, 1000);
}

one(function () {
  console.log("hi");
});

//==================================================================================//

function greets(user: { name: string; age: number }) {
  console.log(user.name);
}

greets({
  name: "ram",
  age: 10,
});

type userType = {
  name: string;
  age: number;
};

let user: userType = {
  name: "rud",
  age: 10,
};

function hello(user: userType) {
  return user;
}

/*
interface userType = {
name : string ,
age : number
}
*/

type k = string | number;
function add(a: k, b: k) {
  console.log((a as any) + (b as any)); //says ts to treat is as type any
}

function a(a1: number, a2: number): number {
  return a1 + a2;
}

//Interfaces and Types

//interface defines the type for a complex object

interface User1 {
  name: string;
  age: number;
  address ?: {
    city: string;
    state: string;
    pincode: number;
  };
}

// ?: makes it optional, without this u would be required to enter the address and its details


interface User2 {
  name: string;
  age: number;
  address ?: {
    city?: string; //nowcity is optional
    state: string;
    pincode: number;
  };
}


let user1: User1 = {
  name: "me",
  age: 12,
  address: {
    city: "hello",
    state: "kcubhi",
    pincode: 221,
  },
};

let user2 : User1 = {
  name:"1",
  age:1
}

function a1(user1: User1): boolean {
  if (user1.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const anss = a1(user1);
{
  if (anss) {
    console.log("legal");
  } else {
    console.log("illegal");
  }
}


//interface can use another interface

 interface Address {
    city: "hello",
    state: "kcubhi",
    pincode: 221,
  }

  interface user3 {
    name : string ,
    address : Address
  }