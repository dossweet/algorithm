// 第一个参数是物品的重量
// 第二个参数是物品的价值
// 第三个参数是背包的容量
// 二维数组版
function bag01(weight,value,size){
    const len = weight.length;
    const dp = new Array(len + 1).fill(0).map(() => array(size + 1).fill(0));
    //dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少
    for (let i = 1; i <= len; i++){// 物品数
        for (let j = 1; j <= size; j++){// j就是背包的容量
            if (j - weight[i]){// 当背包容量 - 当前物品的质量大于0时，才要决定放不放
                dp[i][j] = Math.max(dp[i - 1][j],dp[i-1][j-weight[i]] + value[i]);
            }else{
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[len][size];
}

// 一维数组版
function bag01New(weight,value,size){
    const len = weight.length;
    const dp = Array(size + 1).fill(0);
    for (let i = 1; i <= len; i++){// 物品正序遍历，
        for (let j = size; j >= weight[i - 1]; j--){//背包容量倒序，防止同一个物品被多次遍历
            dp[j] = Math.max(dp[j],value[i - 1] + dp[j - weight[i - 1]]);
        }
    }
    return dp[size];
}
