/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let k = 0
    for (let i = 0; i < words.length; i++) {
        let c = 0;
        for (let j = 0; j < allowed.length; j++) {
            let ch = words[i]
            for (let k = 0; k < words[i].length; k++) {
                if (ch[k] == allowed[j]) {
                    c = c + 1
                }
            }
        }
        if (c >= words[i].length) {
            k = k + 1
        }
    }
    return k
};