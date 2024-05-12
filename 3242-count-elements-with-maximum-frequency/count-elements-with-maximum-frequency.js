/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1)
        }else{
            map.set(nums[i],map.get(nums[i])+1)
        }
    }
    let max=0;
    map.forEach((value,key)=>{
        if(max<=value){
            max=value
        }
    })
    let freq=0;
   map.forEach((value,key)=>{
        if(max==value){
            freq=freq+value
        }
    })
    return freq;
};