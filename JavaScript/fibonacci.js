/*
Fibonacci sequence
*/

//Iterative - O(n) runtime
function fibonacci(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
    
  }
  return result[n];
}


console.log(fibonacci(3));


//Recursive
function fibonacci2(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.log(fibonacci2(5));

//Memoized 
function memoize(fn) {
  const cache = {}
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
fib(200);

//2nd fibonacci algorithm with memoization - O(n) runtime

function fiboMemo(index, cache) {
  cache = cache || [];

  //base case
  if (cache[index]) { 
    return cache[index];
  }
  //recursive case
  else {
    if (index < 3 ) {
      return 1;
    } else {
      cache[index] = fiboMemo(index - 1, cache) + fiboMemo(index -2, cache);
    }
  }

  return cache[index];
}

(console.log(fiboMemo(678))); //returns 2.2086916398132357e+141;



//Fibonacci Series
function fibSeries(n) {
  for (let base, i = 0, j = 1; j < n; base = i, i = j, j = i + base) {
    console.log(j);
  }
}

fibSeries(30);
