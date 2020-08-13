package easy;

import java.util.LinkedList;
import java.util.List;

public class 不用加减乘除做加法 {
     public int Add(int num1,int num2) {
         int sum = 0;
         if (num1==0){
             return  num2;
         }
         if (num2==0){
             return num1;
         }
         while (num2!=0){
             sum = num1^num2;
             num2 = (num1&num2)<<1;
             num1=sum;
         }
         return sum;
    }
}
