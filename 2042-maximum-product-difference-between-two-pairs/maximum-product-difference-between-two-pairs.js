/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  let num=  nums.sort((a,b)=>a-b)

let product1=num[0]*num[1];
let product2=num[nums.length-1]*num[nums.length-2]
let difference=product1-product2;
return Math.abs(difference)
};