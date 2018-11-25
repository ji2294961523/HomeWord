localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量

class product{
    constructor(id,title,price,imgSrc){
    this.id=id;
    this.title=title;
    this.price=price;
    this.imgSrc=imgSrc;
    }
    // introduce(){
    //   console.log('编号'+this.pid+' '+'商品名称'+this.title+' '+'价格'+this.price+' '+this.imgpath+'https://img12.360buyimg.com/da/jfs/t27181/296/1669393067/112550/58c62782/5be96377N3763c9d4.gif?t=1542265284355');
    // }
  }
  class Order{
  constructor(product,qty,selectStatus){
    this.id=product.id;
    this.title=product.title;
    this.price=product.price;
    this.imgSrc=product.imgSrc;
    this.qty=qty;
    this.selectStatus=selectStatus;
  }
}
class CartData{
  constructor(){
    this.orderList=new Array();
    this.units=0;
    this.totalQty=0;
    this.totalAmount=0;
  }
}
  // var st = new Product(01, '1+5手机', 2300);
  // st.introduce();

class ShoppingCart{
    //将购物车数据写入本地存储中
    setDataToLocalSatorge(cartData){
    //清除原有存储写入新列表
        localStorage.removeItem('test');
        //写入本地存储
        localStorage.setItem("test",JSON.stringify(cartData));
    }

    //从本地存储中获取购物车数据
    getDataToLocalSatorge(){
        return localStorage.getItem('test');
        
    }

    getSelectedList(){

    }
    getSelectedQty(){

    }
    getSelectedAmount(){

    }
    setItemSelectatus(id,selectStatus){

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