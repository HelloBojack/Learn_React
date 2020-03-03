// // 1、导入react和react-dom
// import React from "react";
// import ReactDOM from "react-dom";

// import CmtList from "@/components/cmtList";

// import "antd/dist/antd.css";

// import { Button } from "antd";
// ReactDOM.render(
//   <Button type="danger">111</Button>,
//   document.getElementById("app")
// );

// // ReactDom.render(
// //   <div>
// //     <CmtList />
// //   </div>,
// //   document.getElementById("app")
// // );

import { Button } from "antd";
import ReactDOM from "react-dom";
import React from "react";
import "antd/dist/antd.css";

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>,
  document.getElementById("app")
);
