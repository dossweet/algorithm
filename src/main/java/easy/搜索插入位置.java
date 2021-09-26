package easy;

/*
* 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。
* */
public class 搜索插入位置 {
    public static void main(String[] args) {
        搜索插入位置 sw = new 搜索插入位置();
        int reslut = sw.searchInsert(new int[]{1, 3, 5, 7}, 0);
        System.out.println(reslut);
    }

    public int searchInsert(int[] nums, int target) {
        //正确写法--本题考察的是二分查找，而且是最基础的那种，因为nums数组都是排好序的
        int len = nums.length;
        if (nums[len - 1] < target) {
            return len;
        }
        int left = 0;
        int right = len - 1;
        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] == target) {// 加上这一行可以有效加快运行时间，避免了等于mid时，还要left和right的移动
                return mid;
            } else {
                right = mid;
            }
        }
        return left;
    }

    /**
     * js写法--htt尝试的第一次写法
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
//    var searchInsert = function(nums, target) {
//        let index = 0;
//        for (let i=0;i<nums.length;i++){
//            if(nums[i]==target||nums[i]>target){//等于或者大于都返回当前index
//                return index;
//            }else{
//                index++;
//                if((nums[i]<target&&nums[i+1]>target)||(i==nums.length-1&&nums[i]<target)){//数组当前元素小于目标值，数组下一个元素大于目标值，则该数组中不存在该元素，后面也不用比了
//                    return index;
//                }
//            }
//        }
//    };

}
