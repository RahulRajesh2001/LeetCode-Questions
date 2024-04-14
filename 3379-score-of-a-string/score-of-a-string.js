/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
let arr=[]
    for(let i=0;i<s.length;i++){
        let ascii=s[i].charCodeAt(0)
        arr.push(ascii)
    }
  var diff=0
   for(let i=0;i<arr.length-1;i++){
    diff=diff+Math.abs(arr[i]-arr[i+1])
   }
   return diff
   
};