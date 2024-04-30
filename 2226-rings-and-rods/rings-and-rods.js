/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let arr=[]
   for(let i=0;i<rings.length;i++){
    let piece=rings.slice(i,i+2)
    arr.push(piece)
   }
   let c=0
   for(let j=0;j<10;j++){
    if(arr.includes("B"+j)){
        if(arr.includes("R"+j)){
            if(arr.includes("G"+j)){
              c=c+1  
            }
        }
    }
   }
   return c
};