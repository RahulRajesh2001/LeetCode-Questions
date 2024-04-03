/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let stockPrice=prices[0];
    let profit=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]-stockPrice>profit){
            profit=prices[i]-stockPrice;
        }
        if(prices[i]<stockPrice){
            stockPrice=prices[i]
        }
    }
    return profit
};