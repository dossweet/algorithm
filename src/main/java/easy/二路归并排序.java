package easy;

public class 二路归并排序 {
    /**
     * 归并排序
     *
     * @param arr
     * @param left
     * @param right
     */
    public static void mergeSort(int[] arr, int left, int right) {
        if (null == arr) {
            return;
        }

        if (left < right) {
            //找中间位置进行划分
            int mid = (left + right) / 2;
            //对左子序列进行递归归并排序
            mergeSort(arr, left, mid);
            //对右子序列进行递归归并排序
            mergeSort(arr, mid + 1, right);
            //“合”进行归并
            merge(arr, left, mid, right);
        }
    }

    /**
     * 进行归并
     *
     * @param arr
     * @param left
     * @param mid
     * @param right
     */
    private static void merge(int[] arr, int left, int mid, int right) {
        int[] tempArr = new int[arr.length];
        int leftStart = left;
        int rightStart = mid + 1;
        int tempIndex = left;

        while (leftStart <= mid && rightStart <= right) {
            if (arr[leftStart] < arr[rightStart]) {
                tempArr[tempIndex++] = arr[leftStart++];
            } else {
                tempArr[tempIndex++] = arr[rightStart++];
            }
        }

        while (leftStart <= mid) {
            tempArr[tempIndex++] = arr[leftStart++];//代表42行的while循环里，arr[0]和arr[1]中的元素均大于arr[1]和arr[2],以0,1和2,3合并为例
        }

        while (rightStart <= right) {//代表arr[2]和arr[3]中有元素没放进temp中
            tempArr[tempIndex++] = arr[rightStart++];
        }

        while (left <= right) {
            arr[left] = tempArr[left++];//将temp中排好序的元素放回原数组中
        }
    }

    private static void showArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 6, 1, 3, 8, 5, 9};
        /*
         * 归并排序
         * 对上下限值分别为0和arr.length-1的记录序列arr进行归并排序
         */
        mergeSort(arr, 0, arr.length - 1);
        showArr(arr);
    }
}
