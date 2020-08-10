```
每道题的解题思路
```
### 构建乘积数组
#### 题目描述
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。
#### 分析
假设A[]=[1,2,3,4,5]  
根据题意可得
B[]=[2x3x4x5,1x3x4x5,1x2x4x5,1x2x3x5,1x2x3x4]  
B[i]为&nbsp;除了A[i]之外的左边所有元素的乘积xA[i]右边所有元素的乘积  
也就是题目中的B[i]=A[0]x...xA[i-1]xA[i+1]x..xA[n-1]  
令 left[i]=A[0]x..A[i-1]  
right[i]=A[i+1]x..xA[n-1]  
那么 B[i]=left[i]x right[i]&nbsp;&nbsp;&nbsp;&nbsp; 一式   
如果每个B[i]都求一遍left[i]和right[i]的话，时间复杂度将会指数级  
但我们可以先把所有的left[i]和right[i]求出来  
由数学归纳法得  
left[i] = left[i-1]*A[i-1]  
right[i] = right[i+1]*A[i+1]  
带入一式即可求出B[]
#### 代码
```java
public class 构建乘积数组 {
    //改进版
    public int[] multiply(int[] A) {
        int B[] = new int[A.length];
        int left[] = new int[A.length];
        int right[] = new int[A.length];
        B[0] = 1;left[0]=1;right[A.length-1]=1;
        for (int i = 1; i < A.length; i++) {//数组初始化。不初始化的话默认值为0，但我们的题目是连乘
            B[i] = 1;
            left[i] = left[i-1]*A[i-1];
        }
        B[A.length-1] = left[A.length-1];
        for (int j=A.length-2;j>=0;j--){
            right[j] = right[j+1]*A[j+1];
            B[j] = left[j]*right[j];
        }
        return B;
    }

    public static void main(String[] args) {
        int a[] = {1, 2, 3};
        构建乘积数组 st = new 构建乘积数组();
        int b[] = st.multiply(a);
        for (int i = 0; i < b.length; i++) {
            System.out.print(b[i] + ",");
        }
    }
}
```

 

