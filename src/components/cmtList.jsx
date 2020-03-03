import React from "react";

import CmtItem from "@/components/cmtItem";

export default class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      cmtListCnt: [
        {
          id: 1,
          name: "徐乐康",
          content: "最爱猫猫"
        },
        {
          id: 2,
          name: "董志雯",
          content: "最爱狗狗"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.cmtListCnt.map(n => (
          <div>
            <div key={"id" + n.id} className="title">
              {n.id}
            </div>
            <CmtItem key={n.id} {...n}></CmtItem>
          </div>
        ))}
      </div>
    );
  }
}
