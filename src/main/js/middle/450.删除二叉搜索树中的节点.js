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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root === null){
        return root;
    }
    if(root.val === key){
        if(!root.left){
            root = root.right;
        }else if(!root.right){
            root = root.left;
        }else{
            let cur = root.right;
            while(cur.left){
                cur = cur.left;
            }
            cur.left = root.left;
            root = root.right;
            delete root;
            return root;
        }
    }
    if(root.val > key){
        root.left = deleteNode(root.left, key);
    }
    if(root.val < key){
        root.right = deleteNode(root.right, key);
    }
    return root;
};

// 2022年3月10日 手写记录
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root === null) return root;
    if(root.val === key){
        if(!root.left) return root.right;
        if(!root.right) return root.left;
        let cur = root.right;
        while(cur.left){
            cur = cur.left;
        }
        cur.left = root.left;
        root = root.right;
        delete root;
        return root;
    }
    // 下面这行写法是错的，如果不是删的那个点的话，就需要给root.left和root.right赋值
    // if(root.val > key) deleteNode(root.left, key);
    if(root.val > key) root.left = deleteNode(root.left, key);
    if(root.val < key) root.right = deleteNode(root.right, key);
    // if(root.val < key) deleteNode(root.right, key);
    return root;
};