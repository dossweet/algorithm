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
var swapPairs = function(head) {
    let ret = new ListNode(0,head);
    let temp = ret;
    // 注意交换的顺序，要倒着来，不然前面的指针方向一变，后面的就变了
    while(temp.next && temp.next.next){
        let cur = temp.next.next, pre = temp.next;
        pre.next = cur.next;
        cur.next = pre;
        temp.next = cur;
        temp = pre;
    }
    return ret.next;

    // let count = 0;
    // let cur = head;
    // while(cur & cur.next){
    //     // 偶数位才需要和后面的进行交换
    //     if(!(count&1)){
    //         // 先交换，然后把第二个和下一个连起来
    //         let temp = cur;
    //         let next = cur.next.next?cur.next.next:null;
    //         cur = cur.next;
    //         cur.next = temp;
    //         temp.next = next;
    //     }else{
    //         cur = cur.next;
    //     }
    //     count++;
    // }
    // return cur;
};
