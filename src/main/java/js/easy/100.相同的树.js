/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 我的这种解法不好，需要处理特殊情况
    if(!p&&!q) return true;
    if(!p || !q) return false;
    const treevalue = function(root,ret = []){
        if(!root) return [];
        ret.push(root.val);
        if(root.left){
            treevalue(root.left, ret);
        }else{
            ret.push(null);
        }
        if(root.right){
            treevalue(root.right, ret);
        }else{
            ret.push(null);
        }
        return ret;
    }
    const first = treevalue(p);
    const second = treevalue(q);
    for(let i = 0; i < first.length; i++){
        if(first[i] !== second[i]) return false;
    }
    return true;
};

var isSameTree = function (p, q){
    if(!q && !p) return true;
    if(!q || !p ) return false;
    let queue = [];
    queue.push(p.left);
    queue.push(q.right);
    queue.push(p.right);
    queue.push(q.left);
    while (queue.length){
        let len = queue.length;
        let pLeft = queue.shift();
        let qRight = queue.shift();
        let pRight = queue.shift();
        let qLeft = queue.shift();
        if(pLeft !== qRight || (!pLeft&&qRight) || (pLeft&&!qRight) ) return false;
        if(pRight !== qLeft || (!pRight&&qLeft) || (pRight&&!qLeft) ) return false;
        for (let i = 0; i < len; i++){
            // 没有就会把null加进去
           //此处要写8个push省略

            // 下面这种没必要
            // left.left?queue.push(left.left):queue.push(null);
            // right.right?queue.push(right.right):queue.push(null);
            // left.right?queue.push(left.right):queue.push(null);
            // right.left?queue.push(right.left):queue.push(null);
        }
    }
    return true;
}
