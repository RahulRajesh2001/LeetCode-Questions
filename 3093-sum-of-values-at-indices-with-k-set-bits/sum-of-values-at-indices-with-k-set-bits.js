/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let s=0;
    for(i=0;i<nums.length;i++){
        let v=i.toString(2).padStart(3, '0')
        let c=0;
        for(j=0;j<v.length;j++){
            if(v[j]==1){
                c++
            }
        }

        if(c==k){
        s=s+nums[i]
        }
    }
    return s
}