/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let l=nums.length;
   let fact=(l*(l+1)/2)

    var Sum=0
   for(let i=0;i<l;i++){
    Sum=Sum+nums[i]
   }
   return fact-Sum
};