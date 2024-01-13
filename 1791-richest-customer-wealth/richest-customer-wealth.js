/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
        let g=0;
 
    for(let i=0;i<accounts.length;i++){
        let s=0
        let array=accounts[i]
        for(j=0;j<array.length;j++){
            s+= array[j];   
        }
        if(g<s){
            g=s
            
        }
        
    }  
return g
 
};