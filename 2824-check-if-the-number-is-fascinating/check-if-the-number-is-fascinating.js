/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  let a = []
  let x = n.toString()
  let y = 2 * n.toString()
  let z = 3 * n.toString()

  const b = x.concat(y, z)
 
 if(b.includes('0')){
    return false
 }else{
    const set=new Set(b);
    return b.length==set.size ? true : false

 }


}