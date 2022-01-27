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
var preorderTraversal = function(root, res = []) {
    if(!root) return res;
    res.push(root.val);
    preorderTraversal(root.left, res);
    preorderTraversal(root.right,res);
    return res;
};

// 下面这种写法呢，就是严格按照题目条件来的，没有多加一个形参，但是上面的形参设置了默认值，所以传不传都无所谓
var preorderTraversal01 = function (root){
    let res = [];
    const dfs = function (root){
        if(!root) return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
}
