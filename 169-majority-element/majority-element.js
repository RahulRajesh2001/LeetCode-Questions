/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
 const setMap=new Map()
 const n = Math.ceil(nums.length / 2);

 for(let i=0;i<nums.length;i++){
    let number=nums[i]
    if(!setMap.has(number)){
        setMap.set(number,1)
    }else{
        setMap.set(number,setMap.get(number)+1)
    }
 }

setMap.forEach((occurence,number)=>{
if(occurence>=n){
    m=number;
}

})
return m

};