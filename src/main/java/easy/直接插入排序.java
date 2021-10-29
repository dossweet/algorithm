package easy;

public class 直接插入排序 {
    public static void main(String[] args) {
        int nums[] = {1, 2, 5, 3, 8, 2, 1};
        直接插入排序 st = new 直接插入排序();
        st.insertSort(nums);
        for (int i : nums) {
            System.out.print(i + " ");
        }
    }

    public void insertSort(int nums[]) {
        for (int i = 1; i < nums.length; i++) {
//            for (int j = 0; j < i; j++) {
// 这种思路是找到第一个比nums[i]大的元素，然后进行交换，但是是有有问题的，
// 应该是找到nums[i]的位置后，原来该位置起至i之间的元素都后移一位，因此不是很推荐
//                if (nums[j] > nums[i]) {
//                    int temp = nums[j];
//                    nums[j] = nums[i];
//                    nums[i] = temp;
//                }
            // 还应该有后移操作
//            }
            for (int j = i; j > 0; j--) {// 对已排好序的部分重新进行排序，即找到nums[i]要插入的位置
                if (nums[j] < nums[j - 1]) {
                    int temp = nums[j - 1];
                    nums[j - 1] = nums[j];
                    nums[j] = temp;
                }
            }
        }
    }
}
