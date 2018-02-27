/*
Steps Algorithm

Functions accepts a positive number and console.logs an N amount of characters based on the N amount in the function argument
*/

//Solution 1

function steps(n) {
  //row loop
  for (let row = 0; row < n; row++){
    let stair = '';
  //column loop
    for(let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }    
    console.log(stair);
  }
  return;
}

steps(12);


//Recursive solution
function steps2(n, row = 0, stair = '') {
  //Base cases
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps2(n, row + 1);
  }

  //add # and ' '  
  const add = stair.length <= row ? '#' : ' ';
  
  //recursive function call
  steps2(n, row, stair + add);
}

steps2(5);
