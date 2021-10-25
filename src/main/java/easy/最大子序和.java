package easy;

/*
* 力扣53题
* */
public class 最大子序和 {
    public static void main(String[] args) {
        最大子序和 st = new 最大子序和();
        int array[] = {-2,1,-3,4,-1,2,1,-5,4};
        int result = st.maxSubArray(array);
        System.out.println(result);
    }
    public int maxSubArray(int[] nums) {
        int len = nums.length;
        // 用一个变量来存当前的sum值
        int curSum = nums[0];
        // 用一个变量来存最大值
        int maxEle = nums[0];
        for(int i = 1; i < len ; i++){
            // 更新当前和
            curSum = Math.max(curSum+nums[i],nums[i]);
            // 如果当前和>最大值，则更新最大值
            if (curSum>maxEle){
                maxEle = curSum;
            }
        }
        return maxEle;
        // 进阶，如果要列出最大值的连续子序列元素呢？
        // 我的思路是用两个列表来实现，第一个列表里存实时的当前和，第二个列表里存当前最大值的连续子序列，第二个随着第一个来联动
    }
}
