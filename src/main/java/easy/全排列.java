package easy;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class 全排列 {
    // 全排列模板，写的真不错！！！
    public static void main(String[] args) {
        全排列 se = new 全排列();
        int nums[] = {1,2,3};
        List<List<Integer>> result = se.permute(nums);
        for (int i = 0; i<result.size(); i++){
            System.out.println(result.get(i));
        }
    }
    public List<List<Integer>> permute(int[] nums) {
        int start = 0;
        int end = nums.length - 1;
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if (len == 0) {
            return res;
        }
        dfs(nums, start, end, res);
        return res;
    }

    public void dfs(int[] nums, int start, int end, List<List<Integer>> res) {
        List<Integer> path = new ArrayList<Integer>();
        for (int i : nums) {
            path.add(i);
        }
        if (start == end) {
            res.add(path);
        } else {
            for (int i = start; i <= end; i++) {
                swap(nums, start, i);
                dfs(nums, start + 1, end, res);
                swap(nums, start, i);
            }
        }
    }

    public void swap(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

//    public static void main(String[] args) {
//        perm(new int[]{1,2,3},new Stack<Integer>());
//    }

//    public static void perm(int[] array, Stack<Integer> stack) {
//        if(array.length <= 0) {
//            //进入了叶子节点，输出栈中内容
//            System.out.println(stack);
//        } else {
//            for (int i = 0; i < array.length; i++) {
//                //tmepArray是一个临时数组，用于就是Ri
//                //eg：1，2，3的全排列，先取出1，那么这时tempArray中就是2，3
//                int[] tempArray = new int[array.length-1];
//                System.arraycopy(array,0,tempArray,0,i);
//                System.arraycopy(array,i+1,tempArray,i,array.length-i-1);
//                stack.push(array[i]);
//                perm(tempArray,stack);
//                stack.pop();
//            }
//        }
//    }
}
