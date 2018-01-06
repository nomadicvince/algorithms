//Shifts letters according to number called in function and returns string

 caesarCipher(string, num) {
  num = num % 26;
  let lowerCase = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let i = 0; i < lowerCase.length; i++) {
    let currentLetter = lowerCase[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }

    if (newIndex < 0 ) {
      newIndex = 26 + newIndex;
    }

    if (string[i] === string[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}

caesarCipher("Elite Dangerous", 2); // returns Gnkvg Fcpigtqwu after shifting by 2
