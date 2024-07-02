import React, { useState } from "react";
import { Button, Form, Input } from "antd";

type ValueSentence = string | number | undefined;

function Login() {
    const [username, setUsername] = useState<ValueSentence>(undefined);
    const [password, setPassword] = useState<ValueSentence>(undefined);

    function loginButtonOncilck(): void {
        console.log('Login >');
        console.log('username: ' + username + ' // password: ' + password);
    };

    return (
        <>
            <Form>
                <span>Login</span>
                <Form.Item
                    label='username'
                    name='username'
                    rules={[{ required: true }]}
                >
                    <Input
                        onChange={(e) => { setUsername(e.target.value) }}
                    ></Input>
                </Form.Item>

                <Form.Item
                    label='password'
                    name='password'
                    rules={[{ required: true }]}
                >
                    <Input.Password
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        onClick={loginButtonOncilck}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default Login;