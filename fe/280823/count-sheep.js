/*
  Consider an array/list of sheep where some sheep may be missing from their place.
  We need a function that counts the number of sheep present in the array (true means present).
*/

const array = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

const countSheep = (array) => array.filter((item) => item === true).length;

console.log(countSheep(array)); // 17
