// // --- ANOTATION ---
// // Strings --
// let mName: string = "Arshad";
// mName = "10x";
// console.log(mName);
// // Numbers --
// let myNumber: number = 1;
// console.log(myNumber);
// // Booleans --
// let isDone: boolean = false;
// isDone = true;
// console.log(isDone);
// // ---------------
// // --- TYPE INFERENCE ---
// let tech = "Typescript";
// let favnum = 10;
// let isHard = true;
// console.log(typeof tech, typeof myNumber, typeof isDone);
// // ---------------
// // --- ANY TYPE ---
// let color: any = "red";
// color = 20;
// color = true;
// console.log(color);
// // ---------------
// // --- Function ---
// // Regular Func --
// function adddOne(num: number) {
//   return num + 1;
// }
// const res = adddOne(3);
// console.log(res);
// // Arrow Func --
// const doouble = (x: number, y: number) => x * y;
// const result = doouble(2, 3);
// console.log(result);
// const dooubles = (u: string, v: number) => u + v;
// const results = dooubles("arsh10x", 4);
// console.log(results);
// // --- DEFAULT PARAMS VALEU ---
// function greet(preson: string = "Anonymous") {
//   return `Hello ${preson}`;
// }
// const value = greet("Arshad");
// console.log(value);
// // --- RETURN ANNOTATIONS ---
// // Reg Func --
// function double1(x: number): number {
//   return x * x;
// }
// const resu = double1(3);
// console.log(resu);
// // Arrow Func --
// const double2 = (x: number): number => x * x;
// console.log(double2(4));
// // ---------------
// // --- Void ---
// function printMsg(msg: string): void {
//   console.log(`${msg} How are you?`);
// }
// printMsg("Hello");
// // ---------------
// // --- Never ---
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
// // ---------------
// // --- Arrrays ---
var num = [1, 2, 3, 4, 5];
console.log(num);
