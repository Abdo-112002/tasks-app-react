import { useEffect } from 'react';

const useRenderTasksHook = (setLading: (state: boolean) => void) => {
    useEffect(() => {
        const ladingTime = setTimeout(() => {
            setLading(false);
        }, 800);

        return () => {
            clearTimeout(ladingTime);
        };
    }, [setLading]);
};

export default useRenderTasksHook;
