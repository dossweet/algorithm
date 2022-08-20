function TreeNode(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}

let root = new TreeNode(0);
let a = new TreeNode(1);
let b = new TreeNode(2);
root.left = a;
root.right = b;

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return "";
    let ret = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (cur === 'x') {
                ret.push('x')
            } else {
                ret.push(cur.val);
                cur.left ? queue.push(cur.left) : queue.push('x');
                cur.right ? queue.push(cur.right) : queue.push('x');
            }
        }
    }
    return ret.join(',');
};

let arr = serialize(root);
console.log(arr);

var deSerialize = function (arr, i) {
    if (!arr.length) return null;
    if (i >= arr.length) return;
    const root = new TreeNode();
    root.val = arr[i];
    root.left = (i * 2 + 1) < arr.length && arr[i * 2 + 1] !== 'x' ? deSerialize(arr, i * 2 + 1) : null;
    root.right = (i * 2 + 2) < arr.length && arr[i * 2 + 2] !== 'x' ? deSerialize(arr, i * 2 + 2) : null;
    return root;
}

console.log(deSerialize(arr.split(','), 0));
