import { Form, Input } from 'antd';
import { TaskFilterInputs } from '../../../Utils/inputs/TasksPageInputs'
import { useForm } from 'antd/es/form/Form';
import { filterData } from '../../../store/tasksPageStore';
import { useAtom } from 'jotai';

const TasksFilter = () => {
    const [form] = useForm();
    const [, setFilteredData] = useAtom(filterData);
    let filterTime: number | undefined;

    const renderFilterInputs = TaskFilterInputs().map((input) => {
        return (
            <Form.Item
                key={input?.name}
                name={input?.name}
                label={input?.label}
                initialValue={input?.initValue}>
                <Input
                    placeholder={input?.placeholder}
                    type={input?.type}
                    size="large"
                />
            </Form.Item>
        );
    });

    const handelFilter = (text: string) => {
        clearTimeout(filterTime);
        filterTime = setTimeout(() => {
            setFilteredData(text);
        }, 400);
    }

    return (
        <Form layout="vertical" form={form} onValuesChange={(value) => handelFilter(value?.name)}>
            {renderFilterInputs}
        </Form>
    )
}

export default TasksFilter
