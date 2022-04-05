import React from "react";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  PoweroffOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menuTop">
      <div className="menuTopLeft">
        <span className="sinLogo">Acá va el logo</span>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <div className="menuTopRight">
        <Button type="link" onClick={() => console.log("click right")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
