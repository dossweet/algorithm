/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//     if(!preorder) return null;
//     const rootVal = preorder.pop();
//     let rootIndex = inorder.indexOf(rootVal);
//     const root = new TreeNode(rootVal);
//     root.left = buildTree(preorder.slice(0,rootIndex), inorder.slice(0,rootIndex));
//     root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex));
//     return root;
// };
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    // 前序是截取第一个值，后序是截取最后一个值，这里不一样
    const rootVal = preorder.shift();
    let rootIndex = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    root.left = buildTree(preorder.slice(0,rootIndex), inorder.slice(0,rootIndex));
    // 右孩子要从rootIndex之后那个节点开始，因为rootIndex的那个元素没有弹出，前序的在前面就已经弹出了
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1));
    return root;
};
