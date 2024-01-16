/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let v = x.toString()
    let a = []
    let b = []
    for (i = 0; i < v.length; i++) {
        a.push(v[i])
        b.push(v[i])


    }
    a.reverse()
    let c = 0
    for (i = 0; i <= v.length; i++) {
        if (a[i] != b[i]) {
            c++;
        }

    }
    
        if (c === 0) {
            return true
        } else {
            return false
        }

}
