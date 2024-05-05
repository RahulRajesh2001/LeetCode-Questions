/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let c=0
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            for(let k=0;k<nums.length;k++){
                if(i != j && j!=k && k != i ){
                    if(i<j<k){
                        if(nums[j]-nums[i]==diff){
                            if(nums[k]-nums[j]==diff){
                                c=c+1;
                            }
                        }
                    }
                }
            }
        }
    }
    return c
};