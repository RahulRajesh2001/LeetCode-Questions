/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let c = 0
    var v = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            c++
        }
        if (nums[i] == 0) {
            c = 0
        }
        if (c > v) {
            v = c
        }
    }
    return v
};