/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let l=s.length;
    for(let i=1;i<=l/2;i++){
        if(l%i==0){
            var sub=s.slice(0,i)
            var rep=""
            for(let j=0;j<l/i;j++){
                rep +=sub;
            }
            if(rep ===s){
                return true
            }
        }

    }
    return false
};