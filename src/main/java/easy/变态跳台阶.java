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
