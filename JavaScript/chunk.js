/*
Array Chunk Algorithm

Divide array into subarrays of a given size

*/

/* ______________________________________
Array Chunk Solution 1
*/

function arrayChunk(array, size) {
  arrayLength = array.length;
  let tempArray = [];

  for(let i = 0; i < arrayLength; i += size) {
    hunkChunk = array.slice(i, i + size);

    tempArray.push(hunkChunk);
  }

  return tempArray;
}

console.log(arrayChunk([1,2,3,4,5,6,7,8], 3));

/* ______________________________________
Array Chunk Solution 2
*/

function arrayChunk2(array, size) {
  const chunked = [];

  for(let element of array) {
    //Get last element of array
    const last = chunked[chunked.length - 1];

    //Check if last exists
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

console.log(arrayChunk2([1,2,3,4,5,6,7,8,9,10,11], 5));

/* ______________________________________
Array Chunk Solution 3
*/

function arrayChunk3(array, size) {
  // set up variables
  const chunked = [];
  let index = 0;

  //while loop
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(arrayChunk3([1,2,3,4,5,6,7,8,9,10,11,12,13], 2));