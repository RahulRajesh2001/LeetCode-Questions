/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => a - b)
    const set = new Set(nums)
    const arr = Array.from(set)
    arr.reverse()

    if (arr.length == 1) {
        return arr[0]
    } else if (arr.length == 2) {
        return arr[arr.length - 2]
    } else {
        return arr[2]
    }
};