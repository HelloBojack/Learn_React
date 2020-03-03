import React from "react";

import cmtItemCss from "@/css/cmtItem.css";

export default function CmtItem(props) {
  return (
    <div className={[cmtItemCss.father, "title"].join(" ")}>
      <h1>评论人:{props.name}</h1>
      <p>评论内容:{props.content}</p>
    </div>
  );
}
