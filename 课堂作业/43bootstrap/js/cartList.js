var cart=new ShoppingCart();
console.log(cart);
// console.log(cart.getDataFromLocalStorage());
function displayorderlist(){
// 获取购物车订单列表
let cartData=cart.getDataFromLocalStorage();
console.log(cartData);
let orderList=cartData.orderList;
console.log(orderList);





//找父元素
let cartNone=document.querySelector('#cartContent');
//找样本节点
let exampNone=document.querySelector('#orderExample');
console.log(exampNone);

// 遍历订单列表
for (const i in orderList) {
    let order=orderList[i];
    console.log(order);
    //克隆样本节点形成当前订单节点
    var node=exampNone.cloneNode(true);
    //连接父元素
    cartNone.appendChild(node);
    //设置数据
    //节点id
    node.id=order.id;
    //图像地址
    //找图像节点
    let imgNod=node.querySelector('[data-name="imgSrc"]');
    console.log(imgNod);
    imgNod.src='images/'+order.imgSrc;
    node.classList.remove('d-none');
    let selectNode=node.querySelector('[]');
    selectNode.checked=order.selectStatus;
    console.log(selectNode);
    console.log(node);
// for(let i=0;i<orderList.length;i++){
//     let order=orderList[i];
//     console.log(order);
// }


// 克隆一个样本节点
// 设置一个新id
// 挂接到父元素
// 获取所有到数据节点data-name 依次将对应到数据送入节点对应属性
// 移除新节点到隐藏属性 d-none
console.log(node);
}
}
displayorderlist();

// var cartData=cart.getDataFromLocalStorage();

// var orderList=cartData.orderList;

// for(var i=0;i<orderList.lenght;i++){
//     console.log(cartData);
// }

// function displayorderlist() {
// 	for () {
		
// 	}
// }
