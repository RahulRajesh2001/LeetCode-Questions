/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let w = []
    let l = word1.length + word2.length;
    for (let i = 0; i < l; i++) {
        if (word1.length > i) {
            w += word1[i]
        }
        if (word2.length > i) {
            w += word2[i]
        }
    }
    return w
};