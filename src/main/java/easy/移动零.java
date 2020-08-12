package easy;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class test {
    public void move(int a[]){
        int count=0;//用于统计零的个数
        for (int i=0;i<a.length;i++){
            while (i<=a.length-1&&a[i]==0){//目的是找到0后面的非零的元素，存在0后面还是0的情况
                count++;
                i++;
            }
            if (i==a.length){
                break;
            }
            int noZero = a[i];//交换
            a[i-count] = noZero;//非零元素前移
            for (int j=i;j>i-count;j--){//0后面的非零元素前移count位
                a[j]=0;//零元素后移
            }
        }
//        return a;
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
        while (!scanner.hasNext("-1")){//键入-1表示输入结束
            a.add(scanner.nextInt());
        }
        int nums[] = new int[a.size()];
        for (int i=0;i<a.size();i++){
            nums[i] = a.get(i);
        }
        test st = new test();
        st.move(nums);
        for (int i=0;i<nums.length;i++){
            System.out.print(nums[i]+" ");
        }
    }
}
