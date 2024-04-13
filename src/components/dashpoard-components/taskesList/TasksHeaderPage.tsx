import { useAtom } from 'jotai';
import { DButton } from '../../../common'
import { addTaskModal, tasksData } from '../../../store/tasksPageStore';
import { Dropdown, MenuProps, Modal, Space } from 'antd';
import { useCallback } from 'react';
import { AddNewTaskForm } from '../../../components';
import { DownOutlined } from '@ant-design/icons';


const items = (addSort: (key: string) => void): MenuProps['items'] => {
    return [
        {
            label: 'last added',
            key: '0',
            onClick: () => addSort('0'),
        },
        {
            label: 'old added',
            key: '1',
            onClick: () => addSort('1'),
        },
    ];
}



const TasksHeaderPage = () => {
    const [allTasks, sortTasks] = useAtom(tasksData);
    const [openModal, setOpenModal] = useAtom(addTaskModal);

    const toggleModal = useCallback(() => {
        setOpenModal({ ...openModal, isOpen: !openModal?.isOpen, taskId: null })
    }, [openModal, setOpenModal]);

    const sortTasksData = (key: string) => {
        const sortedTasks = allTasks.sort((a, b) => key === '0' ? +b.id - +a.id : +a.id - +b.id);
        sortTasks([...sortedTasks]);
    }

    return (
        <>
            <div className='flex items-center justify-between gap-4 flex-wrap'>
                <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="font-bold"> Tasks Found : {allTasks?.length || 0}</h2>
                    <Dropdown menu={{ items: items(sortTasksData) }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                sort tasks
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <DButton onClick={toggleModal} block={false} text="Add New Task" />
            </div>
            {
                openModal?.isOpen && (
                    <Modal footer={false} onCancel={toggleModal} open={openModal?.isOpen}>
                        <AddNewTaskForm closeForm={toggleModal} />
                    </Modal>
                )
            }
        </>
    )
}

export default TasksHeaderPage
