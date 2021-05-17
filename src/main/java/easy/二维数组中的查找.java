package easy;

public class 二维数组中的查找 {
    public static void main(String[] args) {

    }

    public boolean Find(int target, int[][] array) {
        boolean ifExist = false;
        if (array[0].length > 0) {//数组判空
            for (int i = 0; i < array.length; i++) {
                int lastIndex = array[i].length - 1;
                if (target >= array[i][0] && target <= array[i][lastIndex]) {//有可能在该行
                    for (int j = 0; j <= lastIndex; j++) {
                        if (array[i][j] == target) {
                            ifExist = true;
                            break;
                        }
                    }
                }
            }
        }
        return ifExist;
    }
}
