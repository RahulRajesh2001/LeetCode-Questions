/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false;
    }

    let l = t.length;
    let c = 0;
    for (let i = 0; i < l; i++) {
        if (s[c] === t[i]) {
            c = c + 1;
        }
    }
    if (c === s.length) { 
        return true;
    } else {
        return false;
    }
};
