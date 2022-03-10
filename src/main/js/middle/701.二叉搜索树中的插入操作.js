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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const setInOrder = (root, val) => {
        if(root === null){
            let node = new TreeNode(val);
            return node;
        }
        if(root.val > val){
            root.left = setInOrder(root.left, val);
        }
        if(root.val < val){
            root.right = setInOrder(root.right, val);
        }
        return root;
    }
    return setInOrder(root, val);;
};
