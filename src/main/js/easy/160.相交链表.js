/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let mapA = new Map();
    while (headA){
        mapA.set(headA, headA.val);
        headA = headA.next;
    }
    while (headB){
        if(mapA.has(headB)) return headB;
        headB = headB.next;
    }
    return null;
};
