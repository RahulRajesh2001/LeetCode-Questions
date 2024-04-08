/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let max=0
    for(let i=0;i<sentences.length;i++){
          let c=0
        let sentence=sentences[i].split('').join('')
        for(let j=0;j<sentence.length;j++){
            if(sentence[j]==' '){
            c=c+1
            }
        }
        if(max<c){
            max=c
        }
    }
return max+1
};