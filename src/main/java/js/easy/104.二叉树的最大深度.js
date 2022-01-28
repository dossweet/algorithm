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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let dep = 0, queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        dep++;
    }
    return dep;
};
