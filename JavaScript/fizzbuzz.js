/* ______________________________________
Fizz Buzz Solution 1
*/

function fizzBuzz(n) {
  //Create loop
  for ( let i = 1; i < n; i++) {
    //Is multiple of 3 and 5?
    if (i % 15 === 0) {
      console.log("fizzBuzz");
    //Is multiple of 5?
    } else if ( i % 5 === 0) {
      console.log("fizz");
    //Is multiple of 3?
    } else if ( i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);

/* ______________________________________
Fizz Buzz ES6 helper functions
*/

const list = [...Array(100).keys()]
  .map(n => n + 1)
  .map(n => n % 15 ? n : 'fizzBuzz')
  .map(n => isNaN(n) || n % 3 ? n : "fizz")
  .map(n => isNaN(n) || n % 5 ? n : "Buzz");
  
console.log(list);




