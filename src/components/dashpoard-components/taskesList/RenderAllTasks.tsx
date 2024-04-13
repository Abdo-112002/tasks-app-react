import { useAtomValue } from 'jotai'
import { filterData, tasksData } from '../../../store/tasksPageStore';
import { useMemo, useState } from 'react';
import TaskItem from './TaskItem';
import { Empty, Spin } from 'antd';
import useRenderTasksHook from '../../../hooks/dash-hooks/useRenderTasksHook';

const RenderAllTasks = () => {
    const [loadingData, setLading] = useState<boolean>(true);
    const allTasks = useAtomValue(tasksData);
    const filterValue = useAtomValue(filterData);

    // handel init page load
    useRenderTasksHook(setLading);

    const filteredTasks = useMemo(() => {
        return allTasks.filter((task) => task?.name?.includes(filterValue));
    }, [filterValue,allTasks]);

    console.log(allTasks);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {

                loadingData
                    ? <div className="col-span-full flex items-center justify-center"><Spin size="large" /></div>
                    : !filteredTasks.length
                        ? <div className="col-span-full flex items-center justify-center"><Empty /></div>
                        : filteredTasks?.map((task) => {
                            return <TaskItem key={crypto.randomUUID()} task={task} />
                        })
            }
        </div>
    )
}

export default RenderAllTasks
