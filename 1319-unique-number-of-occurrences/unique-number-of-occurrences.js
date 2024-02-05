/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const setMap=new Map()
    for(i=0;i<arr.length;i++){
        let number=arr[i];
        if(!setMap.has(number)){
            setMap.set(number,1)
        }else{
            setMap.set(number,setMap.get(number)+1)
        }
    }
    const set=new Set()
    setMap.forEach((occurence,number)=>{
        set.add(occurence)
    })

if(setMap.size == set.size){
    return true
}else{
    return false
}
}
