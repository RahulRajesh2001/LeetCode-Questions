/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for(let i=0;i<60;i++){
        let result=Math.pow(3,i)
        if(n==result){
            return true
        }
    }
    return false
};