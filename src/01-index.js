// 1、导入react和react-dom
import React from "react";
import ReactDom from "react-dom";

// 2、创建虚拟DOM元素
// 参数1 字符串 元素类型
// 参数2 对象或null 这个DOM元素的属性
// 参数3 子节点 （DOM或者文本）
// 参数n 其他子节点
// const myH1 = React.createElement('h1', {id :'h1',title:'h1_title'}, '这是一个h1')

// JSX本质还是内部转化为React.createElement
// let myH1 = (
//   <h2 id="h2" title="h2_title">
//     这是h1
//   </h2>
// );
// let myArr1 = [<h1> h1 </h1>, <h2> h2 </h2>];
// let myArr2 = ["徐乐康", "董志雯"];
// let a = 10;
// let h2Title = "h2_title";

// let xlk = {
//   name: "徐乐康"
// };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // 静态属性
// Person.sex = "male";

// console.log(Person);

// import Hello from './components/Hello.jsx'
//
import Hello from "@/components/cmtList.jsx";

// 组件的首字母必须大写
// function Hello(props) {
//   // console.log(props);
//   // props所有属性不可修改 只读
//   // return null
//   // 必须返回对象的属性
//   return <h1>Hello {props.name}</h1>;
// }

// clase -> className
// for -> htmlFor
let myDiv = (
  <div id="h2" title={h2Title}>
    {a + "1"}
    {myH1}
    {/* {myArr1} */}
    {/* {myArr2.map(n=><h1 key={n}>{n}</h1>)} */}
    {/* <Hello name={xlk.name}></Hello> */}
    <Hello {...xlk}></Hello>
  </div>
);
// var bb = {
//   sex: "male",
//   age: "23"
// };
// var aa = {
//   name: "xlk",
//   ...bb
// };
// console.log(aa);

// 3、react-dom
// 参数1 渲染的虚拟DOM
// 参数2 指定容器
ReactDom.render(myDiv, document.getElementById("app"));
