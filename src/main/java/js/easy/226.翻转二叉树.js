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
 * @return {TreeNode}
 */
    // 层次
var invertTree = function(root) {
        // 每次传入的是头部节点
        if(!root) return root;
        const swap = function(left, right) {
            // let temp = right;
            // left = right;
            // right = temp;
            //需要重新给左右孩子赋下值
            root.left = right;
            root.right = left;
        };
        let queue = [];
        queue.push(root);
        // 压栈的话就必须先压右孩子，再压左孩子，递归和队列就不是了
        while(queue.length){
            let node = queue.shift();
            swap(node.left, node.right);
            root.left && invertTree(root.left);
            root.right && invertTree(root.right);
        }
        return root;
    };
//  // 迭代法深搜
// var invertTree = function(root) {
//     // 每次传入的是头部节点
//     if(!root) return root;
//     const swap = function(left, right) {
//         // let temp = right;
//         // left = right;
//         // right = temp;
//         //需要重新给左右孩子赋下值
//         root.left = right;
//         root.right = left;
//     };
//     let stack = [];
//     stack.push(root);
//     // 压栈的话就必炫先压右孩子，再压左孩子，递归就不是了
//     while(stack.length){
//         let node = stack.pop();
//         swap(node.left, node.right);
//         root.right && invertTree(root.right);
//         root.left && invertTree(root.left);
//     }
//     return root;
// };
//  // 递归法深搜
// var invertTree = function(root) {
//     // 每次传入的是头部节点
//     if(!root) return root;
//     const swap = function(left, right) {
//         // let temp = right;
//         // left = right;
//         // right = temp;
//         //需要重新给左右孩子赋下值
//         root.left = right;
//         root.right = left;
//     };

//     swap(root.left, root.right);
//     invertTree(root.left);
//     invertTree(root.right);

//     return root;
// };
