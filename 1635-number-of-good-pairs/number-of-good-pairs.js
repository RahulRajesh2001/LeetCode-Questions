/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let c=0;
  for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
          if(i!=j){
              if(nums[i]==nums[j]){
              c++;
          }
          }
      }
  }
  return c;
};
