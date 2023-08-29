/*
  Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

  "hello"     -->  "hll"
  "codewars"  -->  "cdwrs"
  "goodbye"   -->  "gdby"
  "HELLO"     -->  "HELLO"
*/

const removeVowels = (string) => string.replace(/[aeiou]/g, "");

console.log(removeVowels("hello"));
