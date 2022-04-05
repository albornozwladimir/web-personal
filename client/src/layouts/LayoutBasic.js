import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props) {
  const { children } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menú Basic</h2>
      <Layout>
        <Content>{children}</Content>
        <Footer>Footer Basic</Footer>
      </Layout>
    </Layout>
  );
}
