/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    var result=[]
    for(i=0;i<nums.length;i++){
       var charector=nums[i].toString()

       for(j=0;j<charector.length;j++){
        result.push(charector[j])
       }
       
    }
    return result;
};
