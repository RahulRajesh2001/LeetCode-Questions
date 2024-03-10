/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    const set=new Set()
    for(let i=0;i<nums2.length;i++){
       if(nums1.includes(nums2[i])){
           set.add(nums2[i])
       }
    }
return a=Array.from(set)
};