import { RenderAllTasks, TasksFilter, TasksHeaderPage } from "../../components" // eslint-disable-line


const TasksPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <TasksFilter />
            <div className="flex flex-col gap-4">
                <TasksHeaderPage />
                <RenderAllTasks />
            </div>
        </div>
    )
}

export default TasksPage
