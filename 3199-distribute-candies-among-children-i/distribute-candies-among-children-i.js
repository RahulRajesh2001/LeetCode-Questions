/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let c = 0;
    for(let i=0; i<=limit; i++){
        for(let j=0; j<=limit; j++){
            for(let k=0; k<=limit; k++){
               if(i+j+k>n){
                 break;
               }
               if(i+j+k === n){
                c++
               } 
            }
        }
    }
     return c
    
};