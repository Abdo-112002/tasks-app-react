import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { tasksData } from "../../store/tasksPageStore";

const useRenderTasksHook = (setLading: (state: boolean) => void) => {
    const allTasks = useAtomValue(tasksData);

    useEffect(() => {
        setLading(true);
        const ladingTime = setTimeout(() => {
            setLading(false);
        }, 800);

        return () => {
            clearTimeout(ladingTime);
        };
    }, [allTasks, setLading]);
};

export default useRenderTasksHook;
