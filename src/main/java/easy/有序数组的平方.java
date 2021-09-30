package easy;

import static java.lang.Math.abs;

//leetcode简单等级第977题
public class 有序数组的平方 {
    public static void main(String[] args) {
        int nums[] = {-7,-3,2,3,11};
        int newArray[] = sortedSquares(nums);
        for (int i=0;i<newArray.length;i++){
            System.out.print(newArray[i]+" ");
        }
    }
    public static int[] sortedSquares(int[] nums) {
        // 先把负数取绝对值排序
        // 用两个指针，一个从左开始，一个从右开始
        // 再用一个新数组，用来存最后的结果
        //  还是考察的二分
        int left = 0;
        int right = nums.length -1;
        int newArray[] = new int[nums.length];
        int count = 0;
        int len = nums.length-1;
        while(left<=right){
            int index = len-count;//这里之前写错位置了，放在while循环外边了，但是在while体里没有修改值，导致index一直为最后一个元素下标。或者直接定义在while循环里
            if(abs(nums[left])>abs(nums[right])){// 这里也犯了个错，忘记加绝对值了
                newArray[index] = nums[left]*nums[left];
                left++;
                count++;
            }else{
                newArray[index] = nums[right]*nums[right];
                right--;
                count++;
            }
        }
        return newArray;
    }
}

