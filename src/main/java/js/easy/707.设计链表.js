class LinkNode {
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
}

var MyLinkedList = function() {
    this._size = 0;
    this._tail = null;
    this._head = null;

};

MyLinkedList.prototype.getNode = function(index){
    if(index < 0 || index >= this._size) return null;
    // 创建虚拟头节点
    let cur = new LinkNode(0, this._head);
    let count = 1;
    if(index === 0){
        return cur.next;
    }
    // 0 -> head
    while(cur.next){
        if(count === index){
            return cur.next.next;
        }
        count++;
        cur = cur.next;
    }
    return null;
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1;
    return this.getNode(index).val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // 把创建虚拟节点换成创建真实节点，第二个参数表示下一个节点
    const node = new LinkNode(val, this._head);
    this._head = node;
    this._size++;
    // 如果this._tail为空的话，则代表链表为空，此时尾指针应该指向新添加的node
    if(!this._tail){
        this._tail = node;
    }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // 第二个参数表示下一个节点
    const node = new LinkNode(val, null);
    this._size++;
    if(this._tail){
        this._tail.next = node;
        this._tail = node;
        return;
    }
    this._head = node;
    this._tail = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this._size) return;
    if(index <= 0){
        this.addAtHead(val);
        return;
    }
    if(index === this._size){
        this.addAtTail(val);
        return;
    }
    const node = this.getNode(index - 1);
    node.next = new LinkNode(val, node.next);
    this._size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index >= this._size || index < 0) return;
    if(this._size === 1){
        this._head = null;
        this._tail = null;
        this._size = 0;
        return;
    }
    if(index === 0){
        this._head = this._head.next;
    }else if(index === this._size - 1){
        const node = this.getNode(index - 1);
        this._tail = node;
    }else{
        const node = this.getNode(index - 1);
        node.next = node.next.next;
    }
    this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
