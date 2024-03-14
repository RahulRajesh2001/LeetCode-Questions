/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var a = n.toString().split('');
    var array = [];
    while (true) {
        var sum = 0;
    for (let i=0;i<a.length;i++) {
            sum+=parseInt(a[i])**2;
        }
        if (sum==1){
            return true;
        }
    if (array.includes(sum)) {
            return false;
        } else {
            array.push(sum);
        }
        a=sum.toString().split('')
    }
}