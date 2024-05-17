/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let num=candyType.length/2;
    let set=new Set([...candyType])
    return Math.min(num,set.size)
};