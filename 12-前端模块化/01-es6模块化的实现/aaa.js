let name = '小明';
let age = 18;
let flag = true;

function sum(num1,num2) {
  return num1 + num2;
}
// 导出方式一 对象写法
export {
  flag, sum
}

// 导出方式二 单独导出
export var num = 100;