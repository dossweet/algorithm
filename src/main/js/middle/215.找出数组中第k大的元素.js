var findKthLargest = function (nums, k) {
    const n = nums.length;
    const target_index = n - k;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        const index = quickSort(nums, left, right);

        if (index === target_index) {
            return nums[target_index];
        } else if (index > target_index) {
            right = index - 1;
        } else {
            left = index + 1;
        }
    }

    // 为了加速排序，每一次进行快排的时候，可以以一个随机的下标作为基准进行排序
    // 因为快速排序在完全升序或者完全降序的情况下排序效果是最不理想的。因此我们在选基准点的时候应该以随机来选取基准点来保证效率最高
    function quickSort(nums, low, high) {
        let i = low;
        let j = high;
        let index = Math.random() * (high - low + 1) + low;
        nums[low], nums[index] = nums[index], nums[low];
        let key = nums[low];
        while (i < j) {
            while (nums[j] >= key && i < j) {
                j--;
            }
            nums[i] = nums[j];
            while (nums[i] <= key && i < j) {
                i++;
            }
            nums[j] = nums[i];
        }
        nums[i] = key;
        return low;
    }
};

let nums = [1, 5, 3, 2, 6, 8, 9];
console.log(findKthLargest(nums, 1));
