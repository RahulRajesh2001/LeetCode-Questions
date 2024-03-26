/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }else{
            map.set(nums[i],1);
        }
    }
    var duplicate=0
    map.forEach((occurence,num)=>{
        if(occurence>1){
          duplicate=num
        }
    })
    return duplicate
    
}