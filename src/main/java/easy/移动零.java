package easy;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class 移动零 {
    public void move(int a[]) {//版本一
        int count = 0;//用于统计零的个数
        for (int i = 0; i < a.length; i++) {
            while (i <= a.length - 1 && a[i] == 0) {//目的是找到0后面的非零的元素，存在0后面还是0的情况
                count++;
                i++;
            }
            if (i == a.length) {//表示已经遍历完了所有元素
                break;
            }
            int noZero = a[i];//交换
            a[i - count] = noZero;//交换，非零元素前移count位
            for (int j = i; j > i - count; j--) {//0后面的非零元素前移count位
                a[j] = 0;//零元素后移
            }
        }
    }

    public void move1(int a[]) {//版本二
        List<Integer> b = new ArrayList<Integer>();
        for (int i = 0; i < a.length; i++) {
            if (a[i] != 0) {
                b.add(a[i]);
            }
        }
        for (int j = 0; j < a.length; j++) {
            if (j < b.size()) {
                a[j] = b.get(j);
            } else {
                a[j] = 0;
            }
        }
    }

    public void move2(int nums[]) {//版本三
        int index = 0;
        for (int num : nums) {//单项指针只会前进，所以不用担心数据会被覆盖
            if (num != 0) {
                nums[index++] = num;
            }
        }
        while (index < nums.length) {
            nums[index++] = 0;
        }
    }

    public void move3(int nums[]) {//版本四
        int index = 0;
        for (int i = 0; i < nums.length; i++) {//单项指针只会前进，所以不用担心数据会被覆盖
            if (nums[i] != 0) {
                if (i != index) {
                    nums[index] = nums[i];
                    nums[i] = 0;
                }
                index++;
            }
        }
    }

    public static void main(String[] args) {
//        int a[] = {0,1,0,3,0,0,12,0,3,0};
//        test st = new test();
//        st.move(a);
//        for (int i=0;i<a.length;i++){
//            System.out.print(a[i]+" ");
//        }
        Scanner scanner = new Scanner(System.in);
        List<Integer> a = new ArrayList<Integer>();
        while (!scanner.hasNext("-1")) {//键入-1表示输入结束
            a.add(scanner.nextInt());
        }
        int nums[] = new int[a.size()];
        for (int i = 0; i < a.size(); i++) {
            nums[i] = a.get(i);
        }
        移动零 st = new 移动零();
        st.move3(nums);
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i] + " ");
        }
    }
}
