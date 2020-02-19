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
require('./css/default.css')

document.writeln("<h2>hello</h2>")