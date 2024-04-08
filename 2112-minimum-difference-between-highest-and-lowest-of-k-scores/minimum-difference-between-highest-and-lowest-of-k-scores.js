/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(k==1){
        return 0
    }
    nums.sort((a,b)=>a-b)
    let min=nums[0]
    let max=nums[k-1]
    let diff=max-min
    for(let i=k;i<nums.length;i++){
        diff=Math.min(diff,nums[i]-nums[i-k+1])
    }
    return diff
};