/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const map = new Map()
    for (let i = 0; i < stones.length; i++) {
        if (!map.has(stones[i])) {
            map.set(stones[i], 1)
        } else {
            map.set(stones[i], map.get(stones[i]) + 1)
        }
    }
    console.log(map)
    j = 0
    c = 0
    for (let i = 0; i < jewels.length; i++) {
        map.forEach((value, key) => {
            if (jewels[i] == key) {
                c = c + value
            }
        })
    }
    return c
};