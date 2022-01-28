/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
    if(!root) return [];
    let res = [], queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        let sum = 0;
        for(let i = 0; i < len; i++){
            let cur = queue.shift();
            sum += cur.val;
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        // 注意这里不是取整，可以保留小数
        res.push(sum / len);
    }
    return res;
};
