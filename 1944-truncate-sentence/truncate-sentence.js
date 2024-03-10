/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let a=[];
  let c=1
  let m=s.split('')
    for(let i=0;i<m.length;i++){
      if(m[i]===" "){
        c=c+1;
      }
      if(c<=k){
       a.push(m[i])
      }
    }
  return a.join('')
 
};