/*
  Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

const multiplyAndIncrease = (number) =>
  typeof number === "string" ? "Error" : number * 50 + 6;

console.log(multiplyAndIncrease(25));
