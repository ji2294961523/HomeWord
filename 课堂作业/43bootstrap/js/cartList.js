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
let exampNone=document.querySelector('#orderExample')

// 遍历订单列表
for (const i in orderList) {
    console.log(orderList);
// for(let i=0;i<orderList.length;i++){
//     let order=orderList[i];
//     console.log(order);
// }


// 克隆一个样本节点
// 设置一个新id
// 挂接到父元素
// 获取所有到数据节点data-name 依次将对应到数据送入节点对应属性
// 移除新节点到隐藏属性 d-none
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
