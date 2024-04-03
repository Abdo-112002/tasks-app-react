import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { Outlet } from "react-router-dom"
import SidBar from "./SidBar";
import NavBar from "./NavBar";
import DashGuard from "../../../hooks/global/DashGuard";


const DashLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="w-full h-full">
            <SidBar openSide={collapsed} />
            <Layout>
                <NavBar isOpenSide={collapsed} openSideBar={setCollapsed} />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}


const DashLayoutGuard = DashGuard(DashLayout);
export default DashLayoutGuard;
