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
console.log(cartNone);
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
    let imgNode=node.querySelector('[data-name="imgSrc"]');
    console.log(imgNode);
    imgNode.src='images/'+order.imgSrc;
    node.classList.remove('d-none');
    //设选中状态
    //找选中状态
    let selectNode=node.querySelector('[data-name="checkItemt"]');
    selectNode.checked=order.selectStatus;
    console.log(selectNode);

    let priceNone=node.querySelector('[data-name="price"]');
    priceNone.textContent=order.price;
    console.log(priceNone);

  let titleNode=node.querySelector('[data-name="title"]');
  titleNode.textContent=order.title;
  console.log(titleNode);
   
  let totalProduct=document.querySelector('[data-name="totalProduct"]');
  totalProduct.textContent=cart.getSelectedQty();
  console.log(totalProduct);

  let totalPrice=document.querySelector('[data-name="totalPrice"]');
  totalPrice.textContent=cart.getSelectedAmount();
  console.log(totalPrice);

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


// function displaySelectedTotal(){
//     let selectedTotalQtyNone=cartRoot.querySelector
// }
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
