/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let c=0;
    let m=0

    for(let i=0;i<s.length;i++){
        if(s[i]==='R'){
            m=m-1;
        }else if(s[i]==='L'){
            m=m+1
        }
        if(m===0){
            c=c+1
        }
    }
    return c
};