import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface TaskTypes {
    id: string;
    name: string;
    desc: string;
    status: number;
}

export interface addTaskModalProps {
    isOpen: boolean;
    taskId: string | null;
}

const tasksData = atomWithStorage<TaskTypes[]>("allTasks", []);
const filterData = atom<TaskTypes[]>([]);
const addTaskModal = atom<addTaskModalProps>({
    isOpen: false,
    taskId: null,
});

export { tasksData, addTaskModal, filterData };
