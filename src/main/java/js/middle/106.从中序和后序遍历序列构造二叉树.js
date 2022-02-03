/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!postorder.length) return null;
    const rootVal = postorder.pop();
    let rootIndex = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    root.left = buildTree(inorder.slice(0,rootIndex), postorder.slice(0,rootIndex));
    // 中序右孩子要从rootIndex之后那个节点开始，因为rootIndex的那个元素没有弹出，后序的在前面就已经弹出了
    root.right = buildTree(inorder.slice(rootIndex + 1),postorder.slice(rootIndex));
    return root;
};
