// webpack打包命令 webpack ./src/main.js ./dist/bundle.js

// 1.commonjs模块化规范
const {add,mul} = require('./mathUtils');

console.log(add(20,30));
console.log(mul(2,3));

// 2.ES6模块化规范
import {name,age,height} from "./info";

console.log(name)
console.log(age)
console.log(height)