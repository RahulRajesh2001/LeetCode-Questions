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
var reverseList = function(head) {
    let array=[]
    let current=head
    while(current!== null){
        array.push(current.val)
        current=current.next

    }
    let reverse=array.reverse()
    let newCurrent=head;
    let i=0
    while(newCurrent!==null){
        newCurrent.val=reverse[i]
        i++;
        newCurrent=newCurrent.next
    }
    return head
 
};