/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  let a = []
  let b = []
  a.push(nums[0])
  b.push(nums[1])
  for (let i = 2; i <= nums.length - 1; i++) {
    if (a[a.length-1] > b[b.length - 1]) {
      a.push(nums[i])
    } else {
      b.push(nums[i])
    }
  }
  let g=a.concat(b)
  return g
}