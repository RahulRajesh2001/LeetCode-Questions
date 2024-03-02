/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort(function (a,b){return a-b})
    if(nums[0]+nums[1] > nums[2]){
        if(nums[0]==nums[1] && nums[1] ==nums[2]){
            return "equilateral"
        }else if(nums[0]==nums[1] || nums[1] == nums[2]){
            return  "isosceles"
        }else{
            return "scalene"
        }
    }
    return "none"
}