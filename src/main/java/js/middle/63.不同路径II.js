// 这个版本就是有障碍物的前进
// 其实和没有障碍物的思路一下，唯一一点需要注意的是，有障碍物的直接置为0即可

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0).map(item => new Array(n).fill(0));
    for(let i = 0; i < m && obstacleGrid[i][0]===0; i++){
        dp[i][0] = 1;
    }
    for(let i = 0; i < n && obstacleGrid[0][i]===0; i++){
        dp[0][i] = 1;
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = obstacleGrid[i][j] === 1?0:dp[i-1][j]+dp[i][j-1];
        }
    }
    return dp[m - 1][n - 1];
};
