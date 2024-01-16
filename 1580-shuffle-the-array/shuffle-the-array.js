var shuffle= function(nums,n){
 let a=[]
    for(i=0;i<n;i++){
        a.push(nums[i]);
        a.push(nums[n+i])
    }
    return a;
}