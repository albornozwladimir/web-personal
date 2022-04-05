import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layoutAdmin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layoutAdminHeader">
          <MenuTop
            className="menuTop"
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layoutAdminContent">{children}</Content>
        <Footer className="layoutAdminFooter">asdasdasdadsasd </Footer>
      </Layout>
    </Layout>
  );
}
