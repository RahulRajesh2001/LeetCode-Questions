/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let s=0
   while(s<=n){
    n=n-s;
    s=s+1
   }
   return s-1
}