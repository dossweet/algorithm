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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // 其实有个很蠢的方法，就是一开始就由根节点把二叉树的左右两边分开，然后分别计算它们的深度即可
    // 正确的做法是用递归。
    // 何为平衡二叉树？就是任意节点的左右孩子的高度差不超过1.
    // 如果当前孩子的左右高度差不超过1，就继续往上找
    const getDepth = function(node){
        if(!node) return 0;
        let leftDepth = getDepth(node.left);
        let rightDepth = getDepth(node.right);
        // 已经是-1了，就直接退回根节点就是了
        if(leftDepth === -1) return -1;
        if(rightDepth === -1) return -1;
        // 遍历左右孩子，如果高度差大于1，return -1,表示已经不是平衡二叉树了
        if(Math.abs(leftDepth - rightDepth) > 1){
            return -1;
        } else{
            return 1 + Math.max(leftDepth, rightDepth);
        }
    };
    return !(getDepth(root) === -1);
};
