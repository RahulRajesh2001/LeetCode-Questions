/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let b=[]
    for(let i=0;i<nums.length;i++){
        b.push(nums[i]*nums[i])
    }
    b.sort(function(a,b){return a-b})
    return b 
};