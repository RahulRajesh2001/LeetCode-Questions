/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let c = 0
    for (let num of nums) {
        if (nums.includes(num + diff) && nums.includes(num + diff * 2)) {
            c++
        }
    }
    return c
};