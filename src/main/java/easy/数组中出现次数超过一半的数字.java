package easy;

import java.util.HashMap;
import java.util.Scanner;
import java.util.TreeMap;

public class 数组中出现次数超过一半的数字 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next().toString();
        str = str.substring(0, str.length() - 1);
        String[] arr = str.split(",");
        int[] b = new int[arr.length];
        for (int j = 0; j < b.length; j++) {
            b[j] = Integer.parseInt(arr[j]);
            System.out.println(b[j] + " ");
        }

    }

    public int MoreThanHalfNum_Solution(int[] array) {
        HashMap<Integer, Integer> numberArray = new HashMap<Integer, Integer>();
        int maxCountValue = 1;
        int maxCountKey = array[0];
        for (int i = 0; i < array.length; i++) {
            if (numberArray.containsKey(array[i])) {
                int count = numberArray.get(array[i]);
                numberArray.put(array[i], count + 1);
                if (count + 1 > maxCountValue) {
                    maxCountValue = count + 1;
                    maxCountKey = array[i];
                }
            } else {
                numberArray.put(array[i], 1);
            }
        }
        return maxCountKey;
    }
}
