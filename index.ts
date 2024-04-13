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
