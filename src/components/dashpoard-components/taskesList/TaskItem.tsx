import { Checkbox, Popconfirm, Tag } from 'antd';
import { TaskTypes } from '../../../store/tasksPageStore';
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import useTaskActionsHook from '../../../hooks/dash-hooks/useTaskActionsHook';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface TaskItemProps {
    task: TaskTypes;
    selectedTask : string[];
    checkedTaskChange : (id : string) => (e : CheckboxChangeEvent) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task , checkedTaskChange , selectedTask}) => {

    const { deleteTask, updateTask } = useTaskActionsHook();
    return (
        <div className="border flex items-center justify-between gap-2 flex-wrap rounded shadow p-4">
            <div className="flex flex-col items-start gap-2">
                <h2 className="text-bold text-[20px]">{task.name}</h2>
                <Checkbox onChange={checkedTaskChange(task?.id)} checked={selectedTask.includes(task?.id)}/>
                <p className="text-[16px] w-[100%] text-slate-500">{task.desc}</p>
                <Tag color={task?.status === 1 ? 'green' : task?.status === 2 ? 'orange' : 'blue'}>
                    {task?.status === 1 ? 'Finished' : task?.status === 2 ? 'In Progress' : 'Not Started'}
                </Tag>
            </div>
            <div className="flex items-center flex-col gap-2">
                <div onClick={() => updateTask(task?.id)} className="px-2 py-1 cursor-pointer text-white text-[18px] rounded bg-blue-400"><EditOutlined /></div>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={() => deleteTask(task?.id)}
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    okText="Yes"
                    cancelText="No"
                >
                    <div className="px-2 py-1 cursor-pointer text-white text-[18px] rounded bg-red-400"><DeleteOutlined /></div>
                </Popconfirm>
            </div>
        </div >
    )
}

export default TaskItem
