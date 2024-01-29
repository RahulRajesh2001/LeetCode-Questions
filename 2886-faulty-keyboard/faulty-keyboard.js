/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let a=[]
    let m=[]
    for(i=0;i<s.length;i++){
        a.push(s[i])
        if(s[i]=='i'){
                a.reverse()
        }
    }
for(let i=0;i<a.length;i++){
    if(a[i]!="i"){
        m.push(a[i])
    }
}
return m.join('')
    
}