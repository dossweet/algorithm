function Tree(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function CreateTree(arr, i) {
    if (i === arr.length) return;
    const root = new Tree();
    root.val = arr[i];
    root.left = (i * 2 + 1) < arr.length ? CreateTree(arr, i * 2 + 1) : null;
    root.right = (i * 2 + 2) < arr.length ? CreateTree(arr, i * 2 + 2) : null;
    return root;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(CreateTree(arr, 0));
