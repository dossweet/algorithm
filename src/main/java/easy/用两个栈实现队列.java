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
