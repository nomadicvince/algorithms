/*
Capitalize

An algorithm that accepts a string and capitalizes the first letter of each word within that string.
*/

// Solution 1

function capitalize(str) {
  const words = [];
  
  //loop to turn string into an array of words
  for(let word of str.split(' ')) {
    //Take character of first work, make uppercase then push back into array
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  
  return words.join(' ');
}

console.log(capitalize("a red coat"));


/* ______________________________________
Solution 2
*/

function capitalize2(str) {
  //Capitalize first letter of string
  let result = str[0].toUpperCase();

  /* Iterate through string and look for space to left of character. If space exists, capitalize, otherwise add to string.
  */
  for (let i = 1; i < str.length; i++ ) {
    if(str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  
  return result;
}

console.log(capitalize2("a black coat"));