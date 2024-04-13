export const TaskFilterInputs = () => {
    return [
        {
            name: 'name',
            label: 'search by task name',
            type: 'text',
            placeholder: 'name...',
            initValue: '',
        },
    ];
};

export const AddTaskInputs = () => {
    return [
        {
            name: 'name',
            label: 'task name',
            type: 'text',
            placeholder: 'name...',
            initValue: '',
            rules: [{ required: true, message: 'task name is required' }],
        },
        {
            name: 'desc',
            label: 'task description',
            type: 'textarea',
            placeholder: 'description...',
            initValue: '',
        },
        {
            name: 'status',
            label: 'task status',
            type: 'select',
            placeholder: 'status...',
            initValue: '',
            rules: [{ required: true, message: 'task status is required' }],
            options: [
                { label: 'Not Started', value: 0 },
                { label: 'Finished', value: 1 },
                { label: 'In Progress', value: 2 },
            ],
        },
    ];
};
