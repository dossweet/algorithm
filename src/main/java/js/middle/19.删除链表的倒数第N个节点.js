/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let ret = new ListNode(0, head);
    let slow = fast = ret;
    while(n--){
        fast = fast.next;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    // 原本的slow.next是要删的节点
    slow.next = slow.next.next;
    return ret.next;// 改slow就是改fast，改fast就是改ret
};
