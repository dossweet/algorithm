let arr = [
    {
        id: '1',
        menu_name: '设置',
        menu_url: 'setting',
        parent_id: 0,
    },
    {
        id: '1-1',
        menu_name: '权限设置',
        menu_url: 'setting.permission',
        parent_id: '1',
    },
    {
        id: '1-2',
        menu_name: '菜单设置',
        menu_url: 'setting.menu',
        parent_id: '1',
    },
    {
        id: '2',
        menu_name: '订单',
        menu_url: 'order',
        parent_id: 0,
    },
    {
        id: '2-1',
        menu_name: '报单审核',
        menu_url: 'order.orderreview',
        parent_id: '2',
    },
    {
        id: '2-2',
        menu_name: '退款管理',
        menu_url: 'order.refundmanagement',
        parent_id: '2',
    },
]

function array2Tree(arr) {
    let res = {};
    // 之所以需要temp，是因为对象可以直接通过obj[key]的方式取值
    let temp = {};
    // 把pid作为键，重新处理一下item
    arr.forEach((item) => {
        temp[item.id] = item;
    })
    for (let id in temp) {
        let pid = temp[id].parent_id
        // 如果不存在父节点，就挂载到根元素上
        if (!res[pid]) {
            res[id] = temp[id];
        }else{
            if(!res[pid].children){
                res[pid].children = {};
            }
            res[pid].children[id] = temp[id];
        }
    }
    return res;
}

console.log(array2Tree(arr));
