// Define variables with types

let itemName: string = "apple";
let itemPrice: number = 5;
let isItemAvailable: boolean = true;
const printShoppingListItem = (
  name: string,
  price: number,
  available: boolean
) => {
  console.log(name, price, available);
};
printShoppingListItem(itemName, itemPrice, isItemAvailable);

// ---------------------

// Temperature Converter F=(C*9/5)+32

const celsius = 25;
const celsiusToFahrenheit = (cels: number) => {
  const fahrenheit = (cels * 9) / 5 + 32;
  return fahrenheit;
};
const fahrenheitTemp = celsiusToFahrenheit(celsius);
console.log(`${celsius} C is ${fahrenheitTemp} F`);

// ----------------

// Calculate Circle Area

const radius = 5;

const AreaOfClicle = (radius: number) => {
  const area = 3.14 * radius * radius;
  return area;
};
const Area = AreaOfClicle(radius);
console.log(`The area of circle is ${Area}`);

// -----------

// Check Even or Odd

const Checker = (num: number) => {
  num % 2 == 0 ? console.log(`${num} is Even`) : console.log(`${num} is Odd`);
};

// ----------

// Reverse a String

const revStr = (str: string) => {
  const reverse = str.split("").reverse().join("");
  return reverse;
};
console.log(revStr("Hello World I'm Arshad"));

// Reverse a Number

let num = 12345;
let reverseNum = 0;

for (; num !== 0; num = Math.floor(num / 10)) {
  reverseNum = reverseNum * 10 + (num % 10);
}
console.log(reverseNum);

// ----------------

// Sum Array Elements

const sumArrayElements = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArrayElements(numbers);
console.log(totalSum);

// ---------

// ---  CHECK PALINDROME ---

const isPalindrome = (str: string) => {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
};
console.log(isPalindrome("racecar"));
