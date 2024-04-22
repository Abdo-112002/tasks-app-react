import TaskItem from './TaskItem';
import { Empty, Spin } from 'antd';
import useRenderTasksHook from '../../../hooks/dash-hooks/useRenderTasksHook';
import { useState } from 'react';
import { TaskTypes } from '../../../store/tasksPageStore';

const RenderAllTasks = () => {
    // handel init page load
    const { loadingData, filteredTasks, checkedTaskChange, selectedTask, setSelectedTask } = useRenderTasksHook();

    const [prevValue, selectedValue] = useState<TaskTypes[]>(filteredTasks)

    if (filteredTasks !== prevValue) {
        setSelectedTask([])
        selectedValue(filteredTasks);
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                loadingData
                    ? <div className="col-span-full flex items-center justify-center"><Spin size="large" /></div>
                    : !filteredTasks.length
                        ? <div className="col-span-full flex items-center justify-center"><Empty /></div>
                        : filteredTasks?.map((task) => {
                            return <TaskItem selectedTask={selectedTask} checkedTaskChange={checkedTaskChange} key={crypto.randomUUID()} task={task} />
                        })
            }
        </div>
    )
}

export default RenderAllTasks
