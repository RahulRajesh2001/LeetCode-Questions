/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let word = s.split('')
    let array = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u'|| word[i] == 'A' || word[i] == 'E' || word[i] == 'I' || word[i] == 'O' || word[i] == 'U') {
            array.push(word[i])
        }
    }
    let reverced = array.reverse()
    let c = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u' || word[i] == 'A' || word[i] == 'E' || word[i] == 'I' || word[i] == 'O' || word[i] == 'U') {
            console.log("executed")
            word[i] = reverced[c]
            c++
        }
    }
    return word.join('').toString()
};