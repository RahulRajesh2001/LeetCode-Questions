/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let eleSum=0;
    let absSum=0;
    for(let i=0;i<nums.length;i++){
        eleSum=eleSum+Number(nums[i])
        let digit=nums[i].toString()
        for(let j=0;j<digit.length;j++){
            absSum=absSum+Number(digit[j])
        }
        
    }
    return Math.abs(absSum-eleSum)
};