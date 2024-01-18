/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {

const setMap= new Map()

for(i=0;i<s.length;i++){
  let l=s[i];
  if(!setMap.has(l)){
    setMap.set(l,1)
  }else{
    setMap.set(l,setMap.get(l)+1)
  }
}


return setMap.size

};