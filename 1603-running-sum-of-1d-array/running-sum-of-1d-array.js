/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let c = [];
  for (let i = 0; i < nums.length; i++) {
    c[i] = 0; 
    for (let j = 0; j <= i; j++) {
      c[i] += nums[j]; 
    }
  }
  return c;
}