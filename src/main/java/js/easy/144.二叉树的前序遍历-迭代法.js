var preOrderTraversal = function (root, res = []){
    if (!root) return res;
    const stack = [...root];
    let cur = null;
    // 栈中有中，则先弹中，然后先压右孩子，再压左孩子入栈，等左右孩子都压入栈后，就先弹栈顶的左孩子，然后弹右孩子
    // js解二叉树的题，主要是按逻辑来
    while (stack.length){
        cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
}

let root = [1,null,2,3];
console.log(preOrderTraversal(root));
