/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }

    return (second - 1) * (first - 1)
};