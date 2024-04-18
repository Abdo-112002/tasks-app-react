import { useAtom } from 'jotai';
import { addTaskModal, tasksData } from '../../store/tasksPageStore';

const useTaskActionsHook = () => {
    const [allTasks, updateTasks] = useAtom(tasksData);
    const [, setOpenModal] = useAtom(addTaskModal);

    const deleteTask = (id: string) => {
        const newTasks = allTasks.filter((task) => task?.id !== id);
        updateTasks(newTasks);
    };

    const updateTask = (id: string) => {
        setOpenModal({ isOpen: true, taskId: id });
    };

    return { deleteTask, updateTask };
};

export default useTaskActionsHook;
