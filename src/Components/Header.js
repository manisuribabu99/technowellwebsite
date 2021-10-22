import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function HeaderComponent() {
  const [Mobile, setMobile] = useState(true);
 
  return (
    <Layout>
      <Header className="header">
        <a href="./">
          <img src="assets/images/logo.png" alt="TECHNOWELL" />
        </a>
       
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"}  >
          <Menu mode="horizontal" className="bg">
            <Menu.Item key="1">
              <Link to="/">Home </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/aboutUs">Aboutus</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/services/cad">Services</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/Alliances">Alliances</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/ContactUs">ContactUs</Link>
            </Menu.Item>
          </Menu>
        
        </ul>
        {/* <button className="menu-icon" >
            {Mobile ? <MenuOutlined /> : <CloseOutlined />} 
          </button> */}

        
      </Header>
    </Layout>
  );
}
