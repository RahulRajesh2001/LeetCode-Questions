/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const words=s.split(' ');
    let c=0;
    for(let i=0;i<words.length;i++){
        if(words[i] !== ''){
           c++
        }
    }
    return c
};