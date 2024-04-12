/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map=new Map()

    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])){
            map.set(s[i],1)
        }else{
            map.set(s[i],map.get(s[i])+1)
        }
    }
    let array=[]
    map.forEach((value,key)=>{
        if(value==1){
            for(let i=0;i<s.length;i++){
               if(key==s[i]){
                array.push(i)
               }
            }
        }
    })
    if(array.length==0){
return -1
    }else{
        return array[0]
    }
    
};