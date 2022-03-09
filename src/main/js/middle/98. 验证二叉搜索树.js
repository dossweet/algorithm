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
var isValidBST = function(root, ret = []) {
    if(!root) return ret;
    root.left && isValidBST(root.left, ret);
    ret.push(root.val);
    root.right && isValidBST(root.right, ret);

    for(let i = 1; i < ret.length; i++){
        if(ret[i] <= ret[i - 1]){
            return false;
        }
    }
    return true;
};
