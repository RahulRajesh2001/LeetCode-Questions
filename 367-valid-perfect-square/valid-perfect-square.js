/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num==1){
        return true
    }
    for(let i=1;i<=num/2;i++){
        let value=i*i
        if(value==num){
            return true
        }
    }
    return false
};