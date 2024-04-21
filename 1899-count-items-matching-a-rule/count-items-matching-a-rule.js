/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let j=10
    if(ruleKey=="color"){
        j=1
    }else if(ruleKey=="type"){
        j=0
    }else{
        j=2
    }
let r=0
    for(let i=0;i<items.length;i++){
        let c=0;
        
        let value=items[i]
        for(let k=0;k<value.length;k++){
            if(value[j]==ruleValue){
               c=c+1
            }
        }

        if(c>0){
            r=r+1
        }
        
    }
    return r
};