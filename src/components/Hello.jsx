import React from "react";
import ReactDom from "react-dom";

export default function Hello(props) {
  // console.log(props);
  // props所有属性不可修改 只读
  // return null
  // 必须返回对象的属性
  return <h1>Hello {props.name}</h1>;
}

// export default Hello
