/*
Vowels

A function that returns the number of vowels used

*/

//Solution 1
function vowels(str) {
  let count = 0;
  const check = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (check.includes(char)) {
      count++;
    }
  }

  console.log(count);
  return;
}

vowels("Oscar the Grouch is on Sesame Street");

//Solution 2
function vowels2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels2("Chocolate milk is yummy"));