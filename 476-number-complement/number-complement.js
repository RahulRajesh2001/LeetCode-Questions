/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let n=num.toString(2)
    let com=""
    for(let i=0;i<n.length;i++){
        if(n[i]==1){
          com+="0"
        }else{
         com+="1"
        }
    }
   return parseInt(com,2)
};