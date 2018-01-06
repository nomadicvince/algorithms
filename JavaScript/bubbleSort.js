function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

bubbleSort([4, 3, 99, 45, 1, 2, -4, 0.3]); /* returns [ -4, 0.3, 1, 2, 3, 4, 45, 99 ]*/
