import { Card, Row } from 'antd';
import { LoginForm } from '../components/LoginForm';
import PrivateRoute from '../components/PrivateRoute';

export const LoginPage = () => {
    return (
        <Row justify="center" align="middle">
            <Card>
                <LoginForm />
            </Card>
        </Row>
    );
};
