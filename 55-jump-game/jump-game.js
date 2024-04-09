/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length<=1){
        return true
    }
    let sum=nums[0]
    for(let i=0;i<nums.length;i++){
        if(sum<=i && nums[i]==0){
            return false
        }
        if(i+nums[i]>sum){
            sum=i+nums[i]
        }
        if(sum>=nums.length-1){
            return true
        }
    }
    return false
};