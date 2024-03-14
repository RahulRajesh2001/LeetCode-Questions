/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
 if(n<10){
    if(n===1 || n===7){
        return true
    }else{
        return false
    }
 }

 let total=0
 while(n>0){
    let sq=n%10;
    total=total+sq**2
    n=n-sq;
    n=n/10
 }
 if(total === 1){
    return true
 }else{
    return isHappy(total)
 }
};