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
    let left=0;
    let right=k-1;
    let result=Infinity;

    while(right<nums.length){
        result=Math.min(nums[right]-nums[left],result)
        right++;
        left++
    }
    return result
};