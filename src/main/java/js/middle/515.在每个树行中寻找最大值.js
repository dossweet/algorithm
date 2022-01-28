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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root) return [];
    let res = [], queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        let cur = queue.shift();
        let max = cur.val;
        cur.left && queue.push(cur.left);
        cur.right && queue.push(cur.right);
        for(let i = 1; i < len; i++){
            let cur = queue.shift();
            if(cur.val > max){
                max = cur.val;
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(max);
    }
    return res;
};
