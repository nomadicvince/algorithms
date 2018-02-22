//Turn word into an array, reverse it and join back together

//Solution 1 - Simple solution
function reverseWords(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

console.log("Solution 1: " + reverseWords('SpaceX'));

/*
_________________________________________________________
Solution# 2
*/
function reverseWords2(string) {
  // Create empty string
  let reverse = '';

  //For Loop
  for (let char of string) {
    reverse = char + reverse;
  }

  return reverse;
}

console.log("Solution 2: " + reverseWords2('Star Wars: The Last Jedi'));

/*
_________________________________________________________
Solution# 3
*/
function reverseWords3(string) {
  return string.split('').reduce((rev, char) => char + rev, '');
}

console.log("Solution 3: " + reverseWords3('Elite Dangerous'));

/*
_________________________________________________________
Solution# 4
*/
function reverseWords4(string) {
  // Turn the Word into an array
  let wordsArr = string.split(' ');
  let reverseWordsArr = [];

  //Loop through each letter in the array
  wordsArr.forEach(word => {
    let reversedWord = '';

  //Reverse each letter and push letters back into array
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reverseWordsArr.push(reversedWord);
  })

  //Return joined array 
  return reverseWordsArr.join(' ');
}

console.log("Solution 4: " + reverseWords4('Deep Space Nine'));