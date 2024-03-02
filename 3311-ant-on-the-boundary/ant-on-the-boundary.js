/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let c=0;
    let l=0
    for(let i=0;i<nums.length;i++){
         c=c+nums[i]
        if(c==0){
            l=l+1;
        }
    }
    return l
}