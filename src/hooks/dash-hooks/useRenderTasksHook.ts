import { useEffect, useMemo, useState } from 'react';
import { filterData, tasksData } from '../../store/tasksPageStore';
import { useAtomValue } from 'jotai';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const useRenderTasksHook = () => {
    const [loadingData, setLading] = useState<boolean>(true);
    const allTasks = useAtomValue(tasksData);
    const filterValue = useAtomValue(filterData);
    const [selectedTask , setSelectedTask] = useState<string[]>([]);

    const checkedTaskChange = (id : string) => (e : CheckboxChangeEvent) => {
        if(e.target.checked) {
            setSelectedTask([...selectedTask , id]);
        }
    }

    const filteredTasks = useMemo(() => {
        return allTasks.filter((task) => task?.name?.includes(filterValue));
    }, [filterValue, allTasks]);

    useEffect(() => {
        const ladingTime = setTimeout(() => {
            setLading(false);
        }, 800);

        return () => {
            clearTimeout(ladingTime);
        };
    }, [setLading]);

    return { loadingData, filteredTasks , checkedTaskChange , selectedTask , setSelectedTask};
};

export default useRenderTasksHook;
