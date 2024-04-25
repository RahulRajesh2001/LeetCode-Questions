/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let arr=[]
    for(let i=0;i<words.length;i++){
       let wordArray=words[i].split('')
       arr.push(wordArray[0])
    }
    return s==arr.join('')
};