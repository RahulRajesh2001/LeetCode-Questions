/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
   let a=s.toUpperCase().split('')
   let c=0;

   for(let i=0;i<a.length;i++){
       if(a[i] !== a[i+1]){
           c++;
       }
   }
  let  l=c-1
   return l
};