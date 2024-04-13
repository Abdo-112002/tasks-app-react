import { Button, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userForm } from '../../../store/authStore';

const NavBar = ({ isOpenSide, openSideBar }: { isOpenSide: boolean, openSideBar: (state: boolean) => void }) => {
    const navigation = useNavigate();
    const [, clearUserData] = useAtom(userForm)
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const logout = () => {
        clearUserData({
            name: '',
            password: '',
        })
        navigation('/', { replace: true });
    }

    return (
        <Header className='flex items-center justify-between gap-2 flex-wrap' style={{ padding: 0, background: colorBgContainer }}>
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

            <Button
                type="text"
                className='mr-6'
                onClick={logout}
            >Log out</Button>
        </Header>
    )
}

export default NavBar
