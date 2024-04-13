import { Form, Input } from 'antd';
import { AuthInputs } from '../../Utils/inputs/LoginInputs';
import { CardWrapper, DButton } from '../../common';
import useLoginHook from '../../hooks/auth-hooks/useLoginHook';
import { useMemo, useState } from 'react';
import { userForm } from '../../store/authStore';
import { useAtom } from 'jotai';

const SignIn: React.FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false)
    const [, setUserData] = useAtom(userForm);

    const { login } = useLoginHook({ setLoading, setUserData });

    const authInputs = useMemo(() => {
        return AuthInputs().map((input) => {
            return (
                <Form.Item
                    key={input?.name}
                    name={input?.name}
                    label={input?.label}
                    rules={input?.rules}>
                    <Input
                        placeholder={input?.placeholder}
                        type={input?.type}
                        size="large"
                    />
                </Form.Item>
            );
        });
    }, []);

    return (
        <CardWrapper headerLabel={'Sign in'}>
            <Form
                form={form}
                className="w-full"
                onFinish={(value) => login(value)}
                layout="vertical">
                {authInputs}
                <DButton loading={loading} text="Sign In" />
            </Form>
        </CardWrapper>
    );
};

export default SignIn;
