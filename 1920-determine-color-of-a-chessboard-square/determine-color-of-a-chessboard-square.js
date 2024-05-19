/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
   let a=coordinates[0]
    let alfa=a.charCodeAt(0)-96
   let num=coordinates[1]
   console.log(alfa,num)
   if(alfa%2==0){
    if(num%2!==0){
        return true
    }else{
        return false
    }
   }else{
    if(num%2!==0){
        return false
    }else{
        return true
    }
   }
};