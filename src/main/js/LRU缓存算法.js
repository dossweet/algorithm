/*
* LRU算法中文又称最近最久未使用算法
* 算法步骤就是：
* 1. LRU算法的目的是把内存中的数据存入缓存区中，便于快速读取
* 2. 当缓存区未满时，按队列依次进入数组，越晚进入数组的，优先级越高
* 3. 当缓存区未满时，如果要进入缓冲区的数据已经在缓冲区中存在了，就需要更新。
*    因为我们需要保持新进入的元素的优先级最高。
*    因此需要先把之前的那个元素删掉，然后把新进入数组的元素放在数组末尾，即优先级最高的地方
* 4. 当缓存区满了时，如果需要新加入元素，就需要先把缓存区优先级最低的元素给删掉，然后再把新数据加入数组
* 5. 当从缓存区中读取一个数据时，缓存区中需要先把这个元素删掉，然后重新添加进入，从而保证优先级
* 5. 以上的算法思想最适合用一个map来实现
* */
let LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
}

LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    return -1;
}

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }
    if (this.cache.size < this.capacity) {
        this.cache.set(key, value);
        return;
    }
    this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
    return;
}

const LRUCacheObj = new LRUCache(2);

console.log(LRUCacheObj.put("one", 1));
console.log(LRUCacheObj.put("two", 2));
console.log(LRUCacheObj.get("one"));
console.log(LRUCacheObj.put("three", 3));
console.log(LRUCacheObj.get("three"));
console.log(LRUCacheObj.put('four', 4));
console.log(LRUCacheObj.cache.get("four"));
