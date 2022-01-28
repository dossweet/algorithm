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
var rightSideView = function(root) {
    if(!root) return [];
    let res = [], queue = [];
    queue.push(root);
    while(queue.length){
        let length = queue.length;
        for(let i = 0; i < length; i++){
            let cur = queue.shift();
            if(i === length - 1){
                res.push(cur.val);
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
    }
    return res;
};
