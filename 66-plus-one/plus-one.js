/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let a = [];

    if (digits.length == 1) {
        let b = digits[0] + 1;
        a.push(b);
    } else {
        for (let i = 0; i < digits.length; i++) {
            let c = digits.length;
            if (i == c - 1) {
                a.push(digits[i] + 1);
            } else {
                a.push(digits[i]);
            }
        }
    }

    let result = a.reverse(); // Reverse the array to start from the least significant digit

    for (let i = 0; i < result.length; i++) {
        if (result[i] >= 10) {
            if (i + 1 == result.length) {
                result.push(1);
            } else {
                result[i + 1] += 1;
            }
            result[i] %= 10;
        }
    }

    return result.reverse();
};
