/* takes in an array or prices as a parameter and returns the maximum possible profit for the day */

function maxStockProfit(priceArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (var i = 0; i < priceArr.length; i++) {

    if (changeBuyPrice) {
      buyPrice = priceArr[i];
    }

    sellPrice = priceArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice;

      if (tempProfit > maxProfit)
        maxProfit = tempProfit;
        changeBuyPrice = false;
    }
  }

  return maxProfit;
}

maxStockProfit([32, 46, 26, 38, 40, 48, 42]); /* 22 returned. Algorithm performs with O(n) runtime. */
