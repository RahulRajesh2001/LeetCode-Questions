/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let x=[]
    for(i=0;i<address.length;i++){
      if(address[i]=='.'){
        x.push("[.]")
      }else{
        x.push(address[i])
      }
    }
return x.join('')


};