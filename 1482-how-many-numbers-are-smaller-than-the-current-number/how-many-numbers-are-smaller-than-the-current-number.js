/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let n=[]
    for(let i=0;i<nums.length;i++){
        let c=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                if(i!=j){
                    c++;
                }
            }
        }
        n.push(c)
    }
    return n
}
