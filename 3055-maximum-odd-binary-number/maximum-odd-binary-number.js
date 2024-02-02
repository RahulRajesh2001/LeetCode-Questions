/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let c=0;
    let d=0;
    let b=[]
    for(i=0;i<s.length;i++){
        if(s[i]==0){
            c++
        }else{
            d++;
        }
    }
    for(i=0;i<d-1;i++){
        b.push(1)
    }
    for(i=0;i<c;i++){
        b.push(0)
    }

    b.push(1)

  return b.join('')
  
};