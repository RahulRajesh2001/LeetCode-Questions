/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a=1;
     for(i=0;i<nums.length-1;i++){
         if(nums[i]!==nums[i+1]){
             nums[a]=nums[i+1];
             a++;
         }
     }
     
   return a;
};