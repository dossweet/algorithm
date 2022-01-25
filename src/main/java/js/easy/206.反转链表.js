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
// 反转链表的核心在于：1. 先存储原本的下一个节点 2. 改变指针方向 3. 前进指针
// 双指针法
// var reverseList = function (head) {
//         if (!head || !head.next) return head;
//         let temp = null;
//         let cur = head;
//         let pre = null;
//         while (cur) {
//             temp = cur.next;
//             cur.next = pre; // 改变指针指向
//             pre = cur; // 前进
//             cur = temp;// 前进
//         }
//         return pre;
// };
// 递归
var reverseList = function (head){
    if (!head || !head.next) return head;
    return reverse(null, head);
}

var reverse = function (pre, head) {
    if (!head) return pre;
    const temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
    return reverse(pre, head);
};

