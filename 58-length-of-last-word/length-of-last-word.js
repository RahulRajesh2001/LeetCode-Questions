/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let c=0
let w=s.trim().split('').reverse()

for(i=0;i<w.length;i++){
    if(w[i]!=' '){
        c++
    }else{
        return c
    }
    
}
return c
}