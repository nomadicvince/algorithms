/* 
Maximum Characters

Given a string, return the characters most used in that string
*/

function maxChar(str) {
  //helper functions
  const charMap = {};
  let max = 0;
  let maxChar = '';

  //iterate through string
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //iterate through character map
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log("The character " + maxChar("Chocolate Chip Cookies") + " occurs the most");