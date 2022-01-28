/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let res = [], queue = [];
    queue.push(root);
    while(queue.length){
        let len = queue.length;
        let curLevel = [];
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            curLevel.push(node.val);
            node.children.forEach((item) => {
                item && queue.push(item);
            });
        }
        res.push(curLevel);
    }
    return res;
};
