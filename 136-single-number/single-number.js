/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let k=nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-1;i+=2){
        if(k[i]!=k[i+1]){
            return k[i]
        }
    }
    let l=k.length-1
    return k[l]
};