/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b)=>a-b)
    let first=nums[0]
    let last=nums[nums.length-1]
    let  arr=[]
    for(let i=0;i<2000;i++){
        if(last%i ==0 && first% i==0){
            arr.push(i)
        }
    }
    return arr[arr.length-1]
};