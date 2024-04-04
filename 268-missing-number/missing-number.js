/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let l=nums.length;
    let sum=0
    for(let i=1;i<=l;i++){
    sum=sum+i
    }
    
    for(let i=0;i<nums.length;i++){
        sum-=nums[i]
    }
    return sum
   
}