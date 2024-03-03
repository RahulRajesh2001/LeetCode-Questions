/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let a=[];
    for (let i=0;i<image.length;i++) {
        let b=[];
        for (let j=image[i].length-1;j>=0;j--){
            b.push(image[i][j] === 0?1:0);
        }
        a.push(b);
    }
    return a;
};