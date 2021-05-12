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
### 移动零
#### 题目描述
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。   

示例:   
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]  

说明:  
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
#### 分析  
解题思路1（对应move方法):   
遍历a数组，在遍历的过程中统计零的个数，遇到非零的元素，就交换非零元素至
第一个零元素所在的位置，并将所有的零元素后移，直至遍历数组结束。这种效率不是很高。
```java
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
```
解题思路2（对应move1方法）:  
说的是不能复制元素组，但我们可以用一个链表来记录非零元素的下标呀，然后
在依次根据链表中的下标值重新排序原数组的值。感觉这个和接下来的解题思路3很像，不过
这里用了个列表，导致运行时间比较长。。。
```java
public class 移动零 {
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
}
```
解题思路3(对应move2方法)：  
使用一个index来统计非零元素的数量，因为在遍历数组的过程中，遍历的i永远大于等于index，因此遇到非零元素
就可以更新a[index]的值。然后遍历完数组后，将index值之后的数组元素全部置为0即可。
```java
public class 移动零 {
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
}
```
解题思路4(对应move3方法)：  
move2方法是先找出所有的非零元素，再将剩下的数组元素置为0。
而move3方法是在找非零元素的同时就将零元素后移,这种办法的好处是数组元素置换的次数小于原数组的长度。有些位置为0的元素甚至不需要移动。
```java
public class 移动零 {
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
}
```
### 不用加减乘除做加法
#### 题目描述
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
来源：  
牛客网 剑指offer https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215?tpId=13&&tqId=11201&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
#### 分析
题目要求不能使用加减乘除。其实我们之前学习计算机组成原理的时候有学过位运算。  
位运算就可以实现加减乘除，且效率更高。因为编程中的+-*/的底层其实也是二进制位运算。  
在位运算中：按位与 对应 &，按位或 对应 |， 按位异或 对应 ^。<<1 表示左移一位，>>1表示右移一位。  
位运算中的加法=无进位结果和+进位结果  
无进位结果和=按位异或结果（异或就是相同为0，相异为1）  
进位结果=按位与结果左移一位
```
操作数1    操作数2    &运算     |运算     ^运算
0           0         0        0          0
0           1         0        1          1
1           0         0        1          1
1           1         1        1          0
```
```java
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
         while (num2!=0){//num2可以理解为进位结果
             sum = num1^num2;
             num2 = (num1&num2)<<1;
             num1=sum;//num1理解为异或结果
         }
         return sum;
    }
}
```
### 用两个栈实现队列
#### 题目描述
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型  
#### 分析
队列的特性是：“先入先出”，栈的特性是：“先入后出”

当我们向模拟的队列插入数 a,b,c 时，假设插入的是 stack1，此时的栈情况为：

栈 stack1：{a,b,c}  
栈 stack2：{}  
当需要弹出一个数，根据队列的"先进先出"原则，a 先进入，则 a 应该先弹出。但是此时 a 在 stack1 的最下面，将 stack1 中全部元素逐个弹出压入 stack2，现在可以正确的从 stack2 中弹出 a，此时的栈情况为：

栈 stack1：{}  
栈 stack2：{c,b}  
继续弹出一个数，b 比 c 先进入"队列"，b 弹出，注意此时 b 在 stack2 的栈顶，可直接弹出，此时的栈情况为：

栈 stack1：{}  
栈 stack2：{c}  
此时向模拟队列插入一个数 d，还是插入 stack1，此时的栈情况为：

栈 stack1：{d}  
栈 stack2：{c}  
弹出一个数，c 比 d 先进入，c 弹出，注意此时 c 在 stack2 的栈顶，可直接弹出，此时的栈情况为：

栈 stack1：{d}  
栈 stack2：{c}  
根据上述栗子可得出结论：

当插入时，直接插入 stack1  
当弹出时，当 stack2 不为空，弹出 stack2 栈顶元素，如果 stack2 为空，将 stack1 中的全部数逐个出栈入栈 stack2，再弹出 stack2 栈顶元素

这篇csdn博客讲得不错
https://blog.csdn.net/ailunlee/article/details/85100514?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param
```java
package easy;

import java.util.Stack;

public class 用两个栈实现队列 {
    Stack<Integer> stack1 = new Stack<Integer>();
    Stack<Integer> stack2 = new Stack<Integer>();

    public void push(int node) {//push操作就是直接往数组里插元素
        stack1.push(node);
    }

    public int pop() {
        if (stack2.size() <= 0) {
            while (stack1.isEmpty() == false) {
                stack2.push(stack1.pop());
            }
        }
        return stack2.pop();
    }
}
```
### 变态跳台阶
#### 题目描述  
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。  
#### 分析
两种分析：  
第一种，数学归纳法：  
当n=1时，只有1种跳法    1,即  2^0  
当n=2时，有1+1和2+0两种跳法   2，即   2^1  
当n=3时，有1+1+1,1+2,2+1,3+0四种跳法  4，即 2^2  
当n=4时，有1+1+1+1,1+2+1,1+1+2,2+1+1,1+3,3+1,2+2,4八种跳法 8,即2^3  
...
由此可得，当为n阶台阶时，有2^(n-1)种跳法。  

第二种分析方法：  
设f[i] 表示 当前跳道第 i 个台阶的方法数。那么f[n]就是所求答案。

假设现在已经跳到了第 n 个台阶，那么前一步可以从哪些台阶到达呢？

如果上一步跳 1 步到达第 n 个台阶，说明上一步在第 n-1 个台阶。已知跳到第n-1个台阶的方法数为f[n-1]  
如果上一步跳 2 步到达第 n 个台阶，说明上一步在第 n-2 个台阶。已知跳到第n-2个台阶的方法数为f[n-2]  
...  
如果上一步跳 n 步到达第 n 个台阶，说明上一步在第 0 个台阶。已知跳到 第0个台阶的方法数为f[0]  
那么总的方法数就是所有可能的和。也就是f[n] = f[n-1] + f[n-2] + ... + f[0]  
显然初始条件f[0] = f[1] = 1  
所以我们就可以先求f[2]，然后f[3]...f[n-1]， 最后得出f[n]  
此时f[n]=f[n-1]+f[n-2]+...+f[1]+f[0]  
而f[n-1]=f[n-2]+f[n-3]+...+f[1]+f[0],就是f[n]除去f[n-1]的其他部分，  
那么f[n]=f[n-1]+f[n-1]=2*f[n-1],这就是递归的式子了。
```java
package easy;

public class 变态跳台阶 {
    public int JumpFloorII(int target) {
        /*这个题是一个全排列的题*/
        if(target==1){
            return 1;
        }else if(target==2){
            return 2;
        }else{
            return 2*JumpFloorII(target-1);
        }
    }
}
```
### 数组中出现次数超过一半的数字
#### 题目描述
数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。你可以假设数组是非空的，并且给定的数组总是存在多数元素。1<=数组长度<=50000
#### 示例
示例1

输入   
[1,2,3,2,2,2,5,4,2]  
返回值   
2  

示例2  
输入  
[3,3,3,3,2,2,2]  
返回值  
3  

示例3  
输入  
[1]  
返回值  
1  
#### 分析
看到这道题，我首先想到的解题思路是拿一个map来存数组元素以及该元素出现的次数。同时在生成hashMap之前，用一个maxCountValue和maxCountKey来分别标记出现次数最多的元素，以及出现了几次。这样在生成hashMap的同时，结果也就出来啦~  
```java
public class 数组中出现次数超过一半的数字 {
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
```
这么简单的代码我也不是一次编译成功的。。记录下犯了哪些错：  
1. 误以为TreeMap是按value的升序来排序的，实际上是按key来排序的
2. array[i]才是取具体的数字。而我居然将i值直接赋给了maxCountKey。。
3. 代码容错性没有考虑，应该做个数组判空

算法改进：  
看到大家在题解里说用map这种方式很简单粗暴，但是效率很低，直接用一层循环就可以搞定  
改进版01：
用摩尔投票法来实现，可使时间复杂度为On 空间复杂度为O1.(看评论说这种解法也有局限性)
```java
public class Solution {
    public int MoreThanHalfNum_Solution(int [] array) {
        if(array==null||array.length==0)return 0;
        int morgen=0;
        int vote=0;
        for(int i=0;i<array.length;i++){
            if(vote==0){
                morgen=array[i];
                vote++;
            }else{
                if(array[i]==morgen){
                    vote++;
                }else{
                    vote--;
                }
            }
        }
        int tmp=0;
        for(int i=0;i<array.length;i++){
            if(array[i]==morgen){
                tmp++;
            }
            if(tmp>array.length/2){
                return morgen;
            }
        }
        return 0;
    }
}
```
改进版02：用逻辑思维来解（借鉴思维。看评论说这种解法有局限性）

```
class Solution {
public:
    int majorityElement(vector<int> nums) {
        int count = 0;
        int win;

        for(int n: nums){
            if(count == 0){
                win = n;
                count = 1;
            }else{
                if(win == n){
                    count++;
                }
                else{
                    count--;
                }
            }
        }
        return win;
    }
};
```

