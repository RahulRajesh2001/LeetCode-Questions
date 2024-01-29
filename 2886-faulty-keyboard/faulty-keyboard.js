/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let a=[]
    for(i=0;i<s.length;i++){
        a.push(s[i])
        if(s[i]=='i'){
                a.reverse()
        }
    }

 return a.join('').replaceAll('i','')
    
}