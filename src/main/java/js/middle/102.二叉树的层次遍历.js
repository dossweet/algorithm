/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let res = [], queue = [];
    queue.push(root);
    while(queue.length){
        // 队列长度在当前层级遍历前生效
        let length = queue.length;
        // 存放每一层的节点
        let curLevel = [];
        for(let i =0; i < length; i++){
            let cur = queue.shift();
            curLevel.push(cur.val);
            // 存放下一层的节点
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        // 把每一层的结果放进最后的结果数组中
        res.push(curLevel);
    }
    return res;
};
