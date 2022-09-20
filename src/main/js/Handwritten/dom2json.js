function dom2json(domNode){
    const ans = {
        tag: '',
        attributes: {},
        children: []
    }

    // 获取根标签的tag
    ans.tag = domNode.tagName;

    // 获取根标签的attributes
    let attr = domNode.attributes;
    for (let i in attr){
        ans.attributes[attr[i]] = domNode.getAttribute(arr[i]);
    }

    // 如果是文本标签，还需要获取文本标签的内容
    if (domNode.nodeType === Node.TEXT_NODE){
        ans.context = domNode.innerHTML;
    }

    // 获取当前根节点的children，这是一个数组
    let children = domNode.childNodes;
    for (let i in children){
        domNode.children.push(dom2json(children[i]));
    }

    return ans;
}
