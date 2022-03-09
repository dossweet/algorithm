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
var searchBST = function(root, val) {
    // 递归法
    if(!root || root.val === val){
        return root;
    }
    if(root.val > val){
        return searchBST(root.left, val);
    }
    if(root.val < val){
        return searchBST(root.right, val);
    }
    return null;
};

var searchBST01 = function(root, val) {
    // 迭代法
    while(root !== null){
        if(root.val > val){
            root = root.left;
        }else if(root.val < val){
            root = root.right;
        }else{
            return root;
        }
    }
    return root;
};
