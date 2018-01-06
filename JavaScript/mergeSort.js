function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  var middleIdx = Math.floor(array.length /2);
  var firstHalf = array.slice(0, middleIdx);
  var secondHalf = array.slice(middleIdx);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    var minElem;

    if (arr1[0] < arr2[0]) {
      minElem = arr1.shift();
    } else {
      minElem = arr2.shift();
    }

    result.push(minElem);
  }

  if (arr1.length) {
    result = result.concat(arr1);
  } else {
    result = result.concat(arr2);
  }
  return result;
}

mergeSort([5,9,2,19,7]); /* returns [ 2, 5, 7, 9, 19 ] */
