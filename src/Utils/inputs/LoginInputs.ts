export const AuthInputs = () => {
    return [
        {
            name: "name",
            label: "User Name",
            type: "text",
            placeholder: "username...",
            rules: [
                {
                    required: true,
                    message: "user name must be provided",
                },
            ],
        },

        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "password...",
            rules: [
                {
                    required: true,
                    message: "user name must be provided",
                },
            ],
        },
    ];
};
