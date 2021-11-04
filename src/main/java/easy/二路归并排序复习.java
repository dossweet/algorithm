package easy;

public class 二路归并排序复习 {
    public static void mergeSort(int arr[], int left, int right) {
        if (null == arr) {
            return;
        }
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    public static void merge(int arr[], int left, int mid, int right) {
        int temp[] = new int[arr.length];
        int leftStart = left;
        int rightStart = mid + 1;
        int tempIndex = left;
        while (leftStart <= mid && rightStart <= right) {
            if (arr[leftStart] < arr[rightStart]) {
                temp[tempIndex++] = arr[leftStart++];
            } else {
                temp[tempIndex++] = arr[rightStart++];
            }
        }
        while (leftStart <= mid) {
            temp[tempIndex++] = arr[leftStart++];
        }
        while (rightStart <= right) {
            temp[tempIndex++] = arr[rightStart++];
        }
        while (left <= right) {
            arr[left] = temp[left++];
        }
    }

    public static void main(String[] args) {
        int arr[] = {4, 1, 2, 3, 7, 6, 9};
        mergeSort(arr, 0, arr.length-1);
        print(arr);
    }

    public static void print(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }
    }
}
