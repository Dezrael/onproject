import { Form, Input, Button, Typography } from 'antd';
import { FC, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { userLogin } from '../store/reducers/ActionCreators';
import { validationRules } from '../utils/validationRules';

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch();

    const { isLoading, error } = useAppSelector((state) => state.authReducer);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const submit = () => {
        dispatch(userLogin({ username, password }));
    };

    return (
        <Form onFinish={submit}>
            <Form.Item
                label="Имя пользователя"
                labelCol={{ span: 10 }}
                name="username"
                rules={[validationRules.required('Пожалуйста введите имя пользователя!')]}>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="Пароль"
                labelCol={{ span: 10 }}
                name="password"
                rules={[validationRules.required('Пожалуйста введите пароль')]}>
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={'password'}
                />
            </Form.Item>
            <Form.Item>
                {error && <Typography.Text type="danger">{error}</Typography.Text>}
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
