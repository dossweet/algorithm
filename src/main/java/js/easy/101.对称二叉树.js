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
// var isSymmetric = function(root) {
//     if(!root) return true;
//     //可以用层次遍历来解，判断每个层次上的值是否左右对称，对于不存在的左右孩子，需要用null补上
//     let queue = [];
//     queue.push(root);
//     while(queue.length){
//         let len = queue.length;
//         let arr = [];
//         for(let i = 0; i < len; i++){
//             let cur = queue.shift();
//             if(cur === null){
//                 arr.push(null);
//             }else{
//                 arr.push(cur.val);
//                 if(!cur.left){
//                     queue.push(null);
//                 }else{
//                     queue.push(cur.left);
//                 }
//                 if(!cur.right){
//                     queue.push(null);
//                 }else{
//                     queue.push(cur.right);
//                 }
//             }
//         }
//         let left = 0;
//         let right = len-1;
//         while(left < right){
//             if(arr[left++] !== arr[right--]){
//                 return false;
//             }
//         }
//     }
//     return true;
// };
var isSymmetric = function(root) {
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    if(root===null){
        return true;
    }
    let queue=[];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length){
        let leftNode=queue.shift();//左节点
        let rightNode=queue.shift();//右节点
        if(leftNode===null&&rightNode===null){
            continue;
        }
        if(leftNode===null||rightNode===null||leftNode.val!==rightNode.val){
            return false;
        }
        queue.push(leftNode.left);//左节点左孩子入队
        queue.push(rightNode.right);//右节点右孩子入队
        queue.push(leftNode.right);//左节点右孩子入队
        queue.push(rightNode.left);//右节点左孩子入队
    }
    return true;
};
