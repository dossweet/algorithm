package easy;

public class 选择排序 {
    // 时间复杂度：O(N^2)
    // 空间复杂度：
    public void chooseSort(int nums[]) {
        for (int i = 0; i < nums.length; i++) {
            int min = i;
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[i]) {
                    min = j;
                }
            }
            if (min != i){// 只有出现了更小的时才需要交换
                int temp = nums[min];
                nums[min] = nums[i];
                nums[i] = temp;
            }
        }
    }

    public static void main(String[] args) {
        int nums[] = {1, 2, 5, 3, 8, 2, 1};
        选择排序 st = new 选择排序();
        st.chooseSort(nums);
        for (int i : nums) {
            System.out.print(i + " ");
        }
    }
}
