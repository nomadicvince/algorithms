//Fizz Buzz

const list = [...Array(100).keys()]
  .map(n => n + 1)
  .map(n => n % 15 ? n : 'FizzBuzz')
  .map(n => isNaN(n) || n % 3 ? n : "Fizz")
  .map(n => isNaN(n) || n % 5 ? n : "Buzz");
  
console.log(list);