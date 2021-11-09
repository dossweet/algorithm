package easy;
//leetcode简单等级第278题
public class 第一个错误的版本 {
    // 思路：二分查找，判断mid是否true从而决定是往左二分还是往右二分
    /*
    public int firstBadVersion(int n) {
        int left = 1;
        int right = n;
        while(right>left){
            // int mid = (left+right)/2; //这种写法是错误的,可能会导致计算溢出
            int mid = left+(right-left)/2;
            if(isBadVersion(mid)==true){
                right = mid;
            } else{
                left = mid+1;
            }
        }
        return left;
    }*/
}
