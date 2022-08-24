/**
 * Definition for singly-linked list.
 **/
function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}

const myReverse = (head, tail) => {
    let prev = tail.next;
    let p = head;
    while (prev !== tail){
        const nex = p.next;
        p.next = prev;
        prev = p;
        p = nex;
    }
    return [tail, head];
}

const reverseKGroup = function (head, k){
    const hair = new ListNode(0);
    // hair的next指向头节点
    hair.next = head;
    // pre指向头节点的前一个节点
    let pre = hair;

    while (head){
        // 首先尾节点和pre都指向头节点的前一个节点
        let tail = pre;
        // 然后移动tail，让其指向尾部
        for (let i = 0; i < k; i++){
            tail = tail.next;
            if (!tail){
                return hair.next;
            }
        }
        // 让nex指向下一组元素的头节点
        const nex = tail.next;
        // 交换本组内的节点,
        [head, tail] = myReverse(head, tail);
        // 将转换后的链表连接到原链表上
        pre.next = head;
        // 将尾节点的.next节点指向下一组链表
        tail.next = nex;
        // 移动前驱节点至下组子链表的前一个元素上
        pre = tail;
        // 移动head节点至下组元素的第一个节点上
        head = tail.next;
    }
    return hair.next;
}

const reverseKGroup = function (head, k){
    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;
    while (head){
        let tail = pre;
        for (let i = 0; i < k; i++){
            tail = tail.next;
            if (!tail){
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair;
}

const myReverse = function (head, tail){
    // 依次交换前后两个节点
    let prev = tail.next;
    let p = head;
    while (prev !== tail){
        const nex = p.next;
        p.next = prev;
        prev = p;
        p = nex;
    }
    return [tail, head];
}

const reverseKGroup = function (head, k){
    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;
    while (head){
        let tail = pre;
        for (let i = 0; i < k; i++){
            tail = tail.next;
            if (!tail){
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
}

// const reverseKGroup = function (head, k) {
//     let arr = [];
//     while (head.next) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     // 然后翻转arr
//     for (let i = 0; i < arr.length; i += k) {
//         let left = i;
//         let right = i + k - 1;
//         while (left <= right) {
//             let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//             left++;
//             right--;
//         }
//     }
//     // 然后再把arr转换成链表
//     let node = new ListNode(arr.shift());
//     while (arr.length){
//         node.next = new ListNode(arr.shift());
//     }
// }
