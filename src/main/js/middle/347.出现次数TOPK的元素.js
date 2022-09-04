let topKFrequent = function (nums, k) {
    let map = new Map();
    for (let i in nums){
        if (!map.get(nums[i])){
            map.set(nums[i], 1);
        }else{
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    if (map.size < k){
        return [...map.keys()];
    }
    let arr = Array.from(map);
    let res = [];
    arr.sort((a,b) => b[1] - a[1]);
    for (let i = 0; i < k; i++){
        res.push(arr[i][0]);
    }
    return res;
}

let topKFrequent01 = (nums, k) => {
    let map = new Map();
    for (let i in nums){
        if (map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        }else{
            map.set(nums[i], 1);
        }
    }
    let arr = [];
    map.forEach((value, key) => {
        if (!arr[value]){
            arr[value] = [];
        }
        arr[value].push(key);
    });
    let res = [];
    for (let i = arr.length - 1; i >= 0 && res.length < k; i--){
        if (arr[i]){
            res.push(...arr[i]);
        }
    }
    return res;
}

let topKFrequent02 = (nums, k) => {
    let map = new Map();
    nums.map(num => {
        if (!map.has(num)){
            map.set(num, 1);
        }else{
            map.set(num, map.get(num) + 1);
        }
    });
    let heap = [];
    map.forEach((value, key) => {
        let len = heap.length;
        if (len < k){
            heap.push(key);
            if (len === k - 1){
                buildHeap(heap, map, k);
            }
        }else{
            if (map.get(heap[0]) < value){
                heap[0] = key;
                adjustHeap02(heap, map, k, 0);
            }
        }
    })
    return heap;
}


const buildHeap = (heap, map, k) => {
    for (let  i = Math.floor(k / 2); i >= 0; i--){
        adjustHeap02(heap, map, k, i);
    }
}

const adjustHeap02 = (heap, map, k, i) => {
    let temp = heap[i];
    for (let j = i * 2 + 1; j < k; j = j * 2 + 1){
        if (map.get(heap[j]) < map.get(heap[j + 1])){
            j++;
        }
        if (map.get(heap[j]) < map.get(heap[i])){
            heap[i] = heap[j];
            i = j;
        }else{
            break;
        }
        heap[i] = temp;
    }
}

let nums = [1, 1, 1, 2, 2, 3];
// let nums = [4, 1, -1, 2, -1, 2, 3];
console.log(topKFrequent02(nums, 2));
