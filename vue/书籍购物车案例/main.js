const app = new Vue({
  el: '#app',
  data: {
    // 书籍数据
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《算法图解》',
        date: '2014-9',
        price: 105.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码艺术之道》',
        date: '2015-11',
        price: 125.00,
        count: 1
      },
      {
        id: 5,
        name: '《Javascript高级编程》',
        date: '2013-2',
        price: 99.00,
        count: 1
      }
    ]
  },
  methods: {
    // 作用同过滤器
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2)
    // },
    increment(index){
      // console.log("删除",index);
      this.books[index].count++
    },
    decrement(index){
      // console.log("添加", index);
      this.books[index].count--
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  computed: {
    totalPrice(){
    //   1.普通for循环
    // let totalPrice = 0;
    // for(let i = 0; i<this.books.length; i++){
    //   totalPrice += this.books[i].price * this.books[i].count;
    // }
    // return totalPrice;
   

    // 2.for (let i in this.books)
    // let totalPrice = 0;
    // for (let i in this.books){
    //   const book = this.books[i];
    //   totalPrice += book.price * book.count;
    //   }
    //   return totalPrice;
    

    // 3.for (let i of this.books)
    // let totalPrice = 0;
    // for (let item of this.books){
    //   totalPrice += item.price * item.count
    //   }
    // return totalPrice;


      return this.books.reduce(function(preValue, book){
        return preValue + book.price * book.count
      },0)
    }
  },
  filters: {
    // 过滤器
    ShowPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})

// --------------------------------------
// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会自动过滤掉这次的n
const nums = [1, 3, 4, 5, 64,414,2431,3423413,312,243,23]
    // // 1.filter函数的使用
    // let newNums = nums.filter(function (n){
    //   return n < 100
    // })
    // console.log(newNums);

    // // 2.map函数的使用
    // let new2Nums = newNums.map(function (n){
    //   return n * 2;
    // })
    // console.log(new2Nums);

    // // reduce函数的使用
    // // reduce作用对数组中所有的内容进行汇总
    // let total = new2Nums.reduce(function(preValue, n){
    //   return preValue + n;
    // }, 0)
    // console.log(total);

    // 第一次：preValue 0 n 2
    // 第二次: preValue 2 n 6
    // 第三次: preValue 8 n 8
    // 第四次: preValue 16 n 10
    // 第五次: preValue 26 n 128
    // 第六次: preValue 154 n 46
    // 第七次: 200

    // 链式编程
    let total = nums.filter(function(n) {
      return  n < 100
    }).map(function(n){
      return n * 2
    }).reduce(function(preValue,n){
      return preValue + n
    })
    console.log(total);

    // 箭头函数
    // let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);
    // console.log(total);