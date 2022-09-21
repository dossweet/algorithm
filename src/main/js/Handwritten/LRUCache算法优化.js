// 使用map来做缓存池对于set和get方法来说，时间复杂度都是o(1)
// 但是map进行delete操作的时候其实是一个遍历的过程，因此还有可优化的空间
// 因为链表的删除操作，耗费的时间复杂度是o(1),因此，我们就可以使用map和双向链表相结合的方式来优化LRUCache算法
// 链表的好处就是可以把随机存放的数据按照不同的要求联系起来
// 为啥需要双向链表而不是单向链表呢？
// 主要原因是：当我们需要删除一个节点时，如果是单向链表的话，我们没办法直接获取前驱节点，必须要通过一次遍历才能拿到。
// 这样时间复杂度就是o(n)
// 但如果我们采用的是双向链表的话，直接修改要删除节点的前一个节点的next为当前要删除节点的下一个节点即可。
const linkLineMode = function (key = "", val = ""){
    this.val = val;
    this.key = key;
    this.pre = null;
    this.next = null;
}

// 设置链表初始状态下的指向
const linkLine = function (){
    let head = new linkLineMode("head", "head");
    let tail = new linkLineMode("tail", "tail");
    head.next = tail;
    tail.pre = head;
    this.head = head;
    this.tail = tail;
}

// 链表头节点添加
linkLine.prototype.append = function (node){
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next.pre = node;
    this.head.next = node;
}

// 链表删除指定节点
linkLine.prototype.delete = function (node){
    node.pre.next = node.next;
    node.next.pre = node.pre;
}

// 删除并返回链表的最后一个节点（非tail）
// 取到链表的最后一个节点（非tail节点），删除该节点并返回节点信息
linkLine.prototype.pop = function (){
    let node = this.tail.pre;
    node.pre.next = this.tail;
    this.tail.pre = node.pre;
    return node;
}

// 打印链表信息
// 将链表的信息按顺序打印出来，入参为需要打印的属性
linkLine.prototype.myConsole = function (key = 'val'){
    let h = this.head;
    let res = "";
    while (h){
        if (res != ""){
            res += "-->";
            res += h[key];
            h = h.next;
        }
    }
    console.log(res);
}

// LRUCache数据结构
// capacity保存最大容量，kvMap保存节点信息，linkLine为节点的顺序链表
const LRUCache = function (capacity){
    this.capacity = capacity;
    this.kvMap = new Map();
    this.linkLine = new linkLine();
}

// put方法
// 如果关键字key已经存在，则变更其数据值value，并重置节点链表顺序，将该节点移到头节点之后；如果不存在，则向缓存中插入该组key-value。
// 如果插入操作导致关键字数量超过capacity，则应该踢掉最久未使用的关键字。
LRUCache.prototype.put = function (key, value){
    if (this.kvMap.has(key)){
        let node = this.kvMap.get(key);
        node.val = value;
        this.linkLine.delete(node);
        this.linkLine.append(node);
    }else{
        let node = new linkLineMode(key, value);
        if (this.capacity === this.kvMap.size){
            let nodeP = this.linkLine.pop();
            this.kvMap.delete(nodeP.key);
        }
        this.kvMap.set(key, node);
        this.linkLine.append(node);
    }
}

// get方法
// 如果关键字key存在于缓存中，则返回关键字的值，并重置节点链表顺序，将该节点移到头结点之后，否则，返回-1
LRUCache.prototype.get = function (key){
    if (!this.kvMap.has(key)){
        return -1;
    }
    let node = this.kvMap.get(key);
    this.linkLine.delete(node);
    this.linkLine.append(node);
    return node.val;
}
