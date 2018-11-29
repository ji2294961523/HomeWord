localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量


// 商品类
class Product {
  constructor(id, title, imgSrc, price) {
      this.id = id;
      this.title = title;
      this.imgSrc = imgSrc;
      this.price = price;
  }
}


//订单类
class Order {
  constructor(product, qty, selectStatus) {
      this.id = product.id;
      this.title = product.title;
      this.imgSrc = product.imgSrc;
      this.price = product.price;
      this.qty = qty;
      this.selectStatus = selectStatus;
  }
};

// -----------------
// 购物车数据类,用于记录购物车数据。
// 包括订单列表、总计商品数量、总计商品样本数、总价格
// 订单列表项包括：某类商品、商品数量小计
// 商品包括：商品id、图片、名称、单价
class CartData {
  constructor() {
      this.orderList = new Array();
      this.totalQty = 0;
      this.totalAmount = 0;
      this.units = 0;
  }
}

//购物车操作类
class ShoppingCart {

  // 清空购物车（移除本地存储购物车项）
  clearCart() {
      localStorage.removeItem('lzzyCart');
  }
  // 从本地存储中获取购物车数据
  getDataFromLocalStorage() {
      let lzzyCart = localStorage.getItem('lzzyCart');
      // 判断购物车是否为空
      if (lzzyCart == null || lzzyCart == '') {
          return new CartData();
      } else {
          return JSON.parse(lzzyCart);
      }
  }
  // 将购物车数据写入本地存储中
  setDataToLocalSatorge(cartData) {
      //清除原有存储写入新列表
      localStorage.removeItem('lzzyCart');
      //写入本地存储
      localStorage.setItem('lzzyCart', JSON.stringify(cartData));
  }
  // 加入购物车（写入localStorage)
  addToCart(order) {
      // 从本地存储中获取购物车的数据
      let cartData = this.getDataFromLocalStorage();
      // 获取购物车json数据中的订单列表            
      let orderList = cartData.orderList;
      //设置标志位判断是否为购物车新商品，默认为是新商品
      let isNewProduct = true;
      // 遍历订单列表，判断新加入商品是否在购物车中

      for (let i in orderList) {
          if (order.id == orderList[i].id) {
              // 若新加入订单商品已经在购物车中，则变更订单列表中对应商品数量，且变更新商品标志位
              orderList[i].qty += order.qty;
              isNewProduct = false;
              break;
          }
      }
      //如果是新商品
      if (isNewProduct) {
          // 购物车总样本+1
          cartData.units++;
          // 导入新商品置入购物车
          orderList.push(order);
      }

      //修改购物车总金额及商品总数量
      cartData.totalAmount += order.qty * order.price;
      cartData.totalQty += order.qty;

      // 写入localStorage
      this.setDataToLocalSatorge(cartData);
  }
  // 获取购物车中的订单列表
  getSelectedList() {
      // 从本地存储中获取购物车的数据
      let cartData = this.getDataFromLocalStorage();
      let selectArray = new Array();
      let orderList = cartData.orderList;
      for (const key in orderList) {
          const order = orderList[key];
          if (order.selectStatus) {
              selectArray.push(order);
          }

      }
      return selectArray;
  }
  // 获取选中商品的总数量
  getSelectedQty() {
      let cartData = this.getDataFromLocalStorage();       
      let orderList = cartData.orderList;
      let selectedQty = 0;
      for (const key in orderList) {
          if (orderList[key].selectStatus) {
              selectedQty += orderList[key].qty;
          }
      }
      return selectedQty;
  }
  // 获取选中商品的总价格
  getSelectedAmount() {
      let cartData = this.getDataFromLocalStorage();       
      let orderList = cartData.orderList;
      let selectedAmount = 0;
      for (const key in orderList) {
          if (orderList[key].selectStatus) {
              selectedAmount += orderList[key].qty * orderList[key].price;
          }
      }
      return selectedAmount;
  }   
  //设置某个订单的选择状态
  setItemSelectStatus(id ,selectStatus){
    let cartData = this.getDataFromLocalStorage();
    let orderList=cartData.orderList;
    let flag=false;
    for (const i in orderList) {
        if (order.id == orderList[i].id) {
          orderList[i].selectStatus=selectStatus;
          flag=true;
        }
    }
    if(flag)this.setDataToLocalSatorge(cartData);
  }
  
  //删除指定id的订单
  deleteItem(id)
  {
   let cartData=this.getDataFromLocalStorage();
   let orderList=cartData.orderList;
   let order=this.find(id,orderList);
   let index=orderList.indexOf(order,0);
   if(index==-1){
       console.log();
   }
   else{
       orderList.splice(index,1);
       cartData.totalQty-=order.qty;
       cartData.totalAmount-=order.qty*order.price;
       cartData.units--;
       this.setDataToLocalSatorge(cartData);
   }
  }
}
  
  







// function addtoCart(order){
//   var flag=true;
//   for(var i=0;i<myCart.orderList.length;i++){
//     if(order.id==myCart.orderList[i].id){
//       flag=false;
//       myCart.orderList[i].qty+=order.qty;
//       break;
//     }
//   }
//   if(flag){
//     myCart.orderList.push(order);
//     myCart.units++;
//   }
//   myCart.totalQty += order.qty;
//   myCart.totalAmount += order.price*order.qty;
// }


// var product1=new Product('01','30片巨补水 秋冬新款面膜',19.9,'01.jpg');
// var product2=new Product('02','面膜',20,'01.jpg');


// var myCart=new CarData();

// var order=new Order(product1,5);
// addtoCart(order);
// console.log(myCart);

//  order=new Order(product2,3);
//  addtoCart(order);
//  console.log(myCart);

//  order=new Order(product2,1);
//  addtoCart(order);
//  console.log(myCart);


//  var order1=new Order(product1,5);
//  console.log(order1);
//  var x=10;
//  var y=5;

//  localStorage.setItem('kx',x);
//  var xfroms=localStorage.getItem('kx');
//  console.log(xfroms*y);
//  console.log(parseInt(xfroms)+y);
//  console.log(parseFloat(xfroms)+y);

//  localStorage.setItem('p01',JSON.stringify(product1));
//  var pfroms=JSON.parse(localStorage.getItem('p01'));
//  console.log(pfroms);