/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let arr = []
    for (let i = 1; i <=n; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            let j=i.toString()
            arr.push(j)
        }else if(i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz")
        }else if(i % 3 == 0) {
            arr.push("Fizz")
        }else{
            arr.push("Buzz")
        }

    }
    return arr
};