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
var findMode = function(root) {
    let arr= [];
    let ret = [];
    const buildArr = function(root){
        if(root){
            root.left && buildArr(root.left);
            arr.push(root.val);
            root.right && buildArr(root.right);
        }
    }
    buildArr(arr);
    let temp = arr.reduce((prev,cur) => {
        if(cur in prev){
            prev[cur]++;
        }else{
            prev[cur] = 1;
        }
    },{});
    let most = 1;
    for(let i in temp){
        if(temp[i] === most){
            ret.push(temp[i]);
        }
        if(temp[i] > most){
            ret = [];
            most = temp[i];
            ret.push(temp[i]);
        }
    }
    return ret;
};
