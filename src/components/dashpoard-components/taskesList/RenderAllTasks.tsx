import { useAtomValue } from "jotai"
import { filterData, tasksData } from "../../../store/tasksPageStore";
import { useState } from "react";
import TaskItem from "./TaskItem";
import { Empty, Spin } from "antd";
import useRenderTasksHook from "../../../hooks/dash-hooks/useRenderTasksHook";

const RenderAllTasks = () => {
    const allTasks = useAtomValue(tasksData);
    const filteredTasks = useAtomValue(filterData);
    const [loadingData, setLading] = useState<boolean>(false);
    useRenderTasksHook(setLading);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                !allTasks.length ? <div className="col-span-full flex items-center justify-center"><Empty /></div>
                    : loadingData
                        ? <div className="col-span-full flex items-center justify-center"><Spin size="large" /></div>
                        : filteredTasks.length ? filteredTasks?.map((task) => {
                            return <TaskItem key={crypto.randomUUID()} task={task} />
                        })
                            : allTasks?.map((task) => {
                                return <TaskItem key={crypto.randomUUID()} task={task} />
                            })
            }
        </div>
    )
}

export default RenderAllTasks
