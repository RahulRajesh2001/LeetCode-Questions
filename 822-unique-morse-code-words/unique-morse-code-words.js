/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    const set=new Set()
    
   for(let k=0;k<words.length;k++){
    var string=""
    for(let i=0;i<words[k].length;i++){
        let word=words[k]
        var code=word[i].charCodeAt(0)-97;
        string+=morseCode[code]
    } 
    set.add(string)
   }
return set.size
    
};