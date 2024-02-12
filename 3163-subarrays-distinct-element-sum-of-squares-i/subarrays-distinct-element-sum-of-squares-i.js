/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
  let t=0;
  for(i=0;i<nums.length;i++){
    let a=new Set()
    for(let j=i;j<nums.length;j++){
      a.add(nums[j]);
      t+=(a.size**2)
    }
  }
   return t; 
}
  