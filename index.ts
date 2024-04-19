// --- ANOTATION ---

// Strings --
let mName: string = "Arshad";
mName = "10x";
console.log(mName);

// Numbers --
let myNumber: number = 1;
console.log(myNumber);

// Booleans --
let isDone: boolean = false;
isDone = true;
console.log(isDone);

// ---------------

// --- TYPE INFERENCE ---

let tech = "Typescript";
let favnum = 10;
let isHard = true;
console.log(typeof tech, typeof myNumber, typeof isDone);

// ---------------

// --- ANY TYPE ---

let color: any = "red";
color = 20;
color = true;
console.log(color);

// ---------------

// --- Function ---

// Regular Func --

function adddOne(num: number) {
  return num + 1;
}
const res = adddOne(3);
console.log(res);

// Arrow Func --

const doouble = (x: number, y: number) => x * y;
const result = doouble(2, 3);
console.log(result);

const dooubles = (u: string, v: number) => u + v;
const results = dooubles("arsh10x", 4);
console.log(results);

// --- DEFAULT PARAMS VALEU ---

function greet(preson: string = "Anonymous") {
  return `Hello ${preson}`;
}
const value = greet("Arshad");
console.log(value);

// --- RETURN ANNOTATIONS ---

// Reg Func --

function double1(x: number): number {
  return x * x;
}
const resu = double1(3);
console.log(resu);

// Arrow Func --

const double2 = (x: number): number => x * x;
console.log(double2(4));

// ---------------

// --- Void ---

function printMsg(msg: string): void {
  console.log(`${msg} How are you?`);
}
printMsg("Hello");

// ---------------

// --- Never ---

// function throwError(msg: string): never {
//   throw new Error(msg);
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// let x: never;

// function neverReturn(): never {
//   while (true) {}
// }

// x = neverReturn();

// ---------------

// --- Arrrays ---

const nums: number[] = [1, 2, 3, 4, 5];
const str: string[] = ["one", "two", "three"];
console.log(str);

const items: string[] = [];
items.push("Keyboard");
console.log(items);

const items1: Array<number> = [2, 3, 4];
console.log(items1);

// --- Multi Dimensional Arrrays ---

const SingleDimArr: number[] = [1, 2, 3, 4, 5];

const MultiDimArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(SingleDimArr);
console.log(MultiDimArr);

// --------------

// --- Objects ---

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Java",
  lastName: "Script",
  age: 20,
};
console.log(`Name:${person.firstName} ${person.lastName}, Age: ${person.age}`);

function printUser(): { name: string; age: number } {
  return {
    name: "Alex",
    age: 20,
  };
}
const user = printUser();
console.log(user);

// ---------------

// --- Type Aliases ---

type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}), Age: (${user.age}), Location: (${user.location})`;
};

const render = printUserInfo({
  name: "Arshad",
  age: 20,
  location: "India",
});

console.log(render);

// Optional Property && Read Only

type User1 = {
  name: string;
  age?: number;
  readonly location: string;
};

const printUser1: User1 = {
  name: "Arshad",
  // age: 20,
  location: "India",
};

// printUser1.location = "USA";

console.log(`Name: ${printUser1.name}, Age: ${printUser1.age}`);

// -----------

// --- Intersection Types ---

type Person1 = {
  name: string;
  age: number;
};

type Person2 = {
  mobile: number;
  location: string;
};

type EmployeeDetails = Person1 & Person2;

const Employee: EmployeeDetails = {
  name: "Alice",
  age: 22,
  mobile: 1123409876531,
  location: "US",
};
console.log(
  `Name: (${Employee.name}) , Age: (${Employee.age}) , Mobile: (${Employee.mobile}), Location: (${Employee.location})`
);

// ------------

// --- Union ---

let password: string | number = 23232;

type userInfo = {
  first: string;
  last: string;
  age: number;
};

type accountDetails = {
  email: string;
  password: string;
};

let user0: userInfo | accountDetails = {
  // first:"John",
  // last:"Doe",
  // age:20
  email: "user@gmaill.com",
  password: "asd",
};

const item: (number | string)[] = [1, 2, 3, "A", "B", "C"];
console.log(item);

// ----------------

// Literal Types

let mycolors: "red" | "green" | "blue";
mycolors = "red";
console.log(mycolors);

let isTrue: true | false;
isTrue = true;
console.log(true);

// ---------------

// --- Tuples ---

let myTuple: [number, string];
myTuple = [1, "Arshad"];
console.log(myTuple);

// ---------------

const games: [string, number, boolean] = ["Mario", 3, true];
console.log(games);

// ---------------

// --- Enums ---

enum WeatherConditions {
  Sunny='Sunny',
  Rainy='Rainy',
  Cloudy='Cloudy',
}
console.log(WeatherConditions);


const currentWeather= WeatherConditions.Sunny

console.log(`The current waether is ${currentWeather}`)

//-------


// --- Interface ---

 