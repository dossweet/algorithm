package easy;

/*
* 题目描述--来源剑指offer
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素
* B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
* （注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在
* */
public class 构建乘积数组 {
    public int[] multiply(int[] A){
        int B[] = new int[A.length];//指定长度数组但未知数组元素值的初始化，反之为int a[]={1,2,3};
        for (int i=0;i<B.length;i++){//数组初始化。不初始化的话默认值为0，但我们的题目是连乘
            B[i] = 1;
        }
        for (int i=0;i<A.length;i++){//对数组B的第一个元素赋值，根据题目，第一个元素和最后一个元素比较特殊
            B[0]*=A[i];
        }
        for (int i=0;i<A.length-1;i++){//同理对数组B的最后一个元素赋值
            B[B.length-1] *=A[i];
        }
        for (int i=1; i<=A.length-2;i++) {//对其他元素赋值，b[i]遇到第i个元素则跳过，因为我们已经初始化置为1了。
            for (int j = 0; j <= A.length - 1; j++) {
                if (i == j) {
                    continue;
                } else {
                    B[i] *= A[j];
                }
            }
        }
        return B;
    }

    public static void main(String[] args) {
        int a[]={1,2,3};
        构建乘积数组 st = new 构建乘积数组();
        int b[]=st.multiply(a);
        for (int i=0;i<b.length;i++){
            System.out.print(b[i]+",");
        }
    }
}
