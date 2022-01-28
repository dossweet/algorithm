var inorderTraversal = function (root, ret = []) {
    if(!root) return ret;
    const stack = [];
    let cur = root;
    while (stack.length||cur){
        if (cur){
            stack.push(cur);
            // 先指向左
            cur = cur.left;
        }else{
            // 弹出中
            cur = stack.pop();
            ret.push(cur.val);
            // 指向右
            cur = cur.right;
        }
    }
    return ret;
};
