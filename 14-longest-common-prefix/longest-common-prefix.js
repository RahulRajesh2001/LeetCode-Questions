/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ==0){
        return ""
    }
    if(strs.length ==1){
        return strs.join('')
    }
    let first=strs[0].split('')
    let arr=[]
       for (let j = 0; j < first.length; j++) {
        let word = first[j];
        for (let i = 1; i < strs.length; i++) {
            if (j >= strs[i].length || strs[i][j] !== word) {
                return arr.join('');
            }
        }
        arr.push(word);
    }
    return arr.join('');
};