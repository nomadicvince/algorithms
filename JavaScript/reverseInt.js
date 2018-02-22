/* 
Reverse Integer

Reversing a given integer with a reverse set up numbers
*/

function revInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

console.log(revInt(73));
console.log(revInt(98754));
console.log(revInt(-100)); // zeros disappear
console.log(revInt(-3409));