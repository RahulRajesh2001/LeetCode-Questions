/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome=function(words) {
    for (let i=0;i<words.length;i++) {
        let a=words[i];
        let b=a.split('').reverse().join('');
        if (a === b) {
            return a;
        }
    }
    return ""; 
};