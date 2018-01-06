function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterPart = sum - currNum;
    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}

twoSum([40, 3, 6, 6, 7, 4, 5, -12], 28 ); //returns [[-12, 40]]
