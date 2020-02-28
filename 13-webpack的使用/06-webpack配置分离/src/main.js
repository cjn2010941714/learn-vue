// webpack打包命令 webpack ./src/main.js ./dist/bundle.js

// 1.commonjs模块化规范
const {add,mul} = require('./js/mathUtils');

console.log(add(20,30));
console.log(mul(2,3));

// 2.ES6模块化规范
import {name,age,height} from "./js/info";

console.log(name)
console.log(age)
console.log(height)

// 3,依赖css文件
/*require('./css/default.css')
document.writeln("<h2>hello</h2>")*/

// 4. 使用vue开发
import Vue from 'vue'
// 安装vue npm install vue --save
// 1.runtime-only 不能带template
// 2.runtime-compiler 可以带template
/*
new Vue({
    el: '#app',
    template: `
      <div>
          <h3>{{msg}}</h3>
          <button @click="btnClick">按钮</button>
      </div>
    `,
    data: {
        msg: 'hello webpack'
    },
    methods: {
        btnClick() {
            console.log(123)
        }
    }
});*/

// import App from './vue/app'
import App from './vue/app'
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
});
document.writeln("<button>按钮2</button>");




