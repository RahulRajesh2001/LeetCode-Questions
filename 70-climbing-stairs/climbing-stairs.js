/**
 * @param {number} n
 * @return {number}
 */

var climb = (n,cnt) => {
    const t=Array(n+1).fill(0);
    t[0]=1;
    t[1]=2;
    if (n<=2) return n;
    for(let i=2;i<=n;i++) {
        t[i]=t[i-1]+t[i-2];
    }
    return t[n-1];
};

var climbStairs = function(n) {
    return climb(n,0);
};