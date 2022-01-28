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
var postorderTraversal = function(root, ret = []) {
    if(!root) return ret;
    // 前和后都是stack=[root],前序遍历先压右再压左。后序遍历是先压左，再压右，最后反转
    const stack = [root];
    let cur = null;
    while (stack.length){
        cur = stack.pop();
        ret.push(cur.val);
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return ret.reverse();
};
