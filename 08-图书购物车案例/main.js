const app = new Vue({
  el: '#app',
  data: {
    books: [
      {id: 1, name: '<<算法导论>>', date: '2006-9', price: 85, amount: '1'},
      {id: 2, name: '<<UNIX编程艺术>>', date: '2006-2', price: 59, amount: '1'},
      {id: 3, name: '<<java编程思想>>', date: '2008-10', price: 99, amount: '1'},
      {id: 4, name: '<<JavaScript高级程序设计>>', date: '2006-3', price: 128, amount: '1'},
    ],
    isShow: false
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (book of this.books){
        totalPrice += (book.price * book.amount)
      }
      return totalPrice;
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  methods: {
    add(index) {
      this.books[index].amount ++ ;
    },
    subtract(index) {
      let book = this.books[index];
      if (book.amount > 0){
        this.books[index].amount --;
      }else {
        alert("数量已经是最小了！");
      }
    },
    deleteBook(index) {
      if (this.books.length == 1){
        this.books.splice(index,1);
        this.isShow = true;
      }else {
        this.books.splice(index,1);
      }


    }
  }

});