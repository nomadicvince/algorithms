/* 
Palindrome Algorithm

Palindromes are strings that are spelled them same even if they are reversed. This algorithm will return true if the word is a palindrome and false if it is not.
*/

//Solution 1 
function palindrome(str) {
  const reversed = str
   .split('')
   .reverse()
   .join('');
  return str === reversed;
}

console.log("Solution 1: " + palindrome('aba'));


/*
_________________________________________________________
Solution# 2
*/

function isPalindrome2(str) {
  return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];
  })
}
 
console.log("Solution 2: " + isPalindrome2("abba"));

/*
_________________________________________________________
Solution# 3
*/

function isPalindrome3(str) {
  str = str.toLowerCase();
  let charactersArr = str.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  let lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}
 
console.log("Solution 3: " + isPalindrome3("A man, a plan, a canal, Panama"));

