import { Form, Input, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { AddTaskInputs } from '../../../Utils/inputs/TasksPageInputs';
import TextArea from 'antd/es/input/TextArea';
import { DButton } from '../../../common';
import { TaskTypes, addTaskModal, tasksData } from '../../../store/tasksPageStore';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const AddNewTaskForm = ({ closeForm }: { closeForm: () => void }) => {
    const [form] = useForm();
    const [allTasksData, addTaskData] = useAtom(tasksData);
    const [openModal,] = useAtom(addTaskModal);
    const [saveLoading, setSaveLoading] = useState<boolean>(false);
    const renderAddTaskInputs = AddTaskInputs().map((input) => {
        const InputTypeComponent = input?.type === 'text' ? Input : input?.type === 'select' ? Select : TextArea;
        return (
            <Form.Item
                key={input?.name}
                name={input?.name}
                label={input?.label}
                rules={input?.rules || []}
                initialValue={input?.initValue || ''}>
                <InputTypeComponent
                    placeholder={input?.placeholder}
                    type={input?.type}
                    options={input?.options}
                    size="large"
                />
            </Form.Item>
        );
    });

    const cancelForm = () => {
        closeForm();
        form.resetFields();
        setSaveLoading(false);
    }

    const onSubmitForm = (values: TaskTypes) => {
        setSaveLoading(true);
        openModal.isOpen && openModal.taskId ? updateTask(values, openModal.taskId) : addNewTask(values);
        setTimeout(() => {
            cancelForm();
        }, 500);
    }

    const addNewTask = (values: TaskTypes) => {
        const lastItem = allTasksData[allTasksData.length - 1]?.id || 0;
        addTaskData([...allTasksData, { ...values, id: `${+lastItem + 1}` }]);
    }

    const updateTask = (values: TaskTypes, id: string) => {
        const updatedTasks = allTasksData?.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    ...values
                }
            }
            return task;
        });
        addTaskData(updatedTasks);
    }

    useEffect(() => {
        if (openModal.isOpen && openModal.taskId && allTasksData.length) {
            const task = allTasksData.find((task) => task.id === openModal.taskId)
            form.setFieldsValue(task);
        }
    }, [openModal, form, allTasksData]);

    return (
        <Form form={form} layout='vertical' onFinish={onSubmitForm}>
            {renderAddTaskInputs}
            <div className='flex items-center gap-4 flex-wrap justify-end'>
                <DButton type="text" className="" block={false} onClick={cancelForm} htmlType={'button'} text={'cancel'} />
                <DButton loading={saveLoading} block={false} text={'save'} />
            </div>
        </Form>
    )
}

export default AddNewTaskForm
