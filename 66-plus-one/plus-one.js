/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

        let a = [];

        if(digits.length==1){
            let b=digits[0]+1;
            a.push(b)
        }else{
            for(i=0;i<digits.length;i++){
              let c=digits.length;
                if (i==c-1) {
                a.push(digits[i]+1);
            } else {
                a.push(digits[i]);
            }
            }
        }
    let x = a.reverse();

     for (let i=0;i<x.length;i++) {
        if (x[i]>=10) {
            if (i+1==x.length) {
                x.push(1);
            } else {
                x[i+1]+= 1;
            }
            x[i]%=10;
        }
    }

    return x.reverse();


}