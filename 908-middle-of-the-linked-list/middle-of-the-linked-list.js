/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let firsthead = head;
    let l = 0;
    while (head) {
        l++;
        head = head.next;
    }
    if (l % 2 === 0) {
        l = Math.round(l / 2) + 1;
    } else {
        l = Math.round(l / 2);
    }

    let result = [];
    let c = 0;
    while (firsthead){
        c++;
        if (c === l) {
            result.push(firsthead);
        }
        firsthead = firsthead.next;
    }
    return result[result.length - 1];
};
