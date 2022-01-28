/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;
    let queue = [root];
    while(queue.length){
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if( i < len - 1){// 这里一定要记得判断i < len - 1
                node.next = queue[0];
            }else{// 默认就为null，因此可以不写else
                node.next = null;
            }
            node.left &&  queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
    // queue.push(root);
    // if(!root.left){
    //     root.next = null;
    //     return root;
    // }else{
    //     while(queue.length){
    //         let len = queue.length;
    //         let nodeleft = queue.shift();
    //         for(let i = 1; i < len; i++){
    //             let node = queue.shift();
    //             if(i === len - 1){
    //                 nodeleft.next = null;
    //             }
    //             nodeleft.next = node.val;
    //             ret.push(nodeleft);
    //             queue.push(nodeleft.left);
    //             queue.push(nodeleft.right);
    //             nodeleft = node;
    //         }
    //     }
    // }
    // return root;
};
