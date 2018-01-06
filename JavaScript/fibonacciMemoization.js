//fibonacci algorithm with memoization - O(n) runtime

function fiboMemo(index, cache) {
  cache = cache || [];

  //base case
  if (cache[index]) { return cache[index];
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

fiboMemo(678); //returns 2.2086916398132357e+141
