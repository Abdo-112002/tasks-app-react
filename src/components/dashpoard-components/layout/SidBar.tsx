import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { UnorderedListOutlined } from '@ant-design/icons';
import { useAtomValue } from 'jotai/react';
import { UserInfoProps, userForm } from '../../../store/authStore';

const SidBar = ({ openSide }: { openSide: boolean }) => {
    const userData: UserInfoProps = useAtomValue(userForm);
    return (
        <Sider trigger={null} collapsible collapsed={openSide}>
            <div className="w-[95%]  text-center text-[20px] mx-auto my-2 bg-slate-200 rounded p-2">
                hello {userData?.name || ''}
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UnorderedListOutlined />,
                        label: 'Tasks Page',
                    },
                ]}
            />
        </Sider>
    )
}

export default SidBar
