/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // let ele = new Array(n).fill(1);
    // let newArray = new Array(n).fill(ele);
    let newArray = new Array();
    for (let i = 0; i < 3; i++) {
        newArray[i] = new Array();
        for (let j = 0; j < 3; j++) {
            newArray[i][j] = 0;
        }
    }
    let count = 1;
    let direction = ['right', 'bottom', 'left', 'top'];
    let rowIndex;
    let columnIndex;
    for (let i = 0; i < Math.floor(n / 2); i++) { // 总共要走对角线除以2次
        rowIndex = i;
        columnIndex = i;
        for (let j = 0; j < direction.length; j++) {
            switch (direction[j]) {
                case 'right':
                    while (columnIndex < n - i) {
                        newArray[rowIndex][columnIndex++] = count++;
                    }
                    columnIndex--;
                    rowIndex++;
                    break;
                case 'bottom':
                    while (rowIndex < n - i) {
                        newArray[rowIndex++][columnIndex] = count++;
                    }
                    rowIndex--;
                    columnIndex--;
                    break;
                case 'left':
                    while (columnIndex > n - i) {
                        newArray[rowIndex][columnIndex--] = count++;
                    }
                    columnIndex++;
                    rowIndex--;
                    break;
                case 'top':
                    while (rowIndex > n - i) {
                        newArray[rowIndex--][columnIndex] = count++;
                    }
                    rowIndex++;
                    columnIndex++;
                    break;
            }
        }
    }
    if (n % 2 !== 0) { // 奇数的中心最后需要单独赋值
        let row = Math.floor(n / 2) + 1;
        let column = Math.floor(n / 2) + 1;
        newArray[row][column] = count;
    }

    return newArray;
};

console.log(generateMatrix(3));

// let ele = new Array(3).fill(1);
// let newArray = new Array(3).fill([0, 0, 0], 0, 3);

// newArray[0][0] = 2;
// newArray[1][0] = 3;

// console.log(newArray);

// let row = new Array();
// for (let i = 0; i < 3; i++) {
//     row[i] = new Array();
//     for (let j = 0; j < 3; j++) {
//         row[i][j] = 1;
//     }
// }
// console.log(row);
// row[1][0] = 2;
// row[2][0] = 3;
// console.log(row);