function harmlessRansomeNote(noteText, magazineText) {
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
      magazineObj[word]++;
    }
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
   if (magazineObj[word]) {
     magazineObj[word]--;

     if (magazineObj[word] < 0) {
       magazineObj[word] = false;
     }
   } else {
     noteIsPossible = false;
   }
  });

  return noteIsPossible;
}

harmlessRansomeNote('The cat is black', 'John had a cat with black fur. The cat is often hungry around noon');
