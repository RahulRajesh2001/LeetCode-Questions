/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let word=sentence.split('')
    const set=new Set(word)
    if(set.size==26){
        return true
    }else{
        return false
    }
};