import { Button, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const NavBar = ({ isOpenSide, openSideBar }: { isOpenSide: boolean, openSideBar: (state: boolean) => void }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={isOpenSide ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => openSideBar(!isOpenSide)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    )
}

export default NavBar
