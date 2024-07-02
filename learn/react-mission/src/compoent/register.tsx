import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { valueType } from "antd/lib/statistic/utils";

type ValueSentence = string | undefined;

function Register() {

    const [username, setUsername] = useState<ValueSentence>(undefined);
    const [password, setPassword] = useState<ValueSentence>(undefined);
    const [firstPassword,setFirstPassword] = useState<ValueSentence>(undefined);
    const [reconfirmPassword,setReconfirmPassword]=useState<ValueSentence>(undefined);

    function submit(): void {

        if (firstPassword==reconfirmPassword) {
            setPassword(reconfirmPassword);
            console.log('Register >');
            console.log('username: ' + username + ' // password: ' + password);
        }else{
            alert('password error');
        }
    };

    return (
        <>
            <Form>
                <span>Register</span>
                <Form.Item
                    label='username'
                    name='username'
                    rules={[{ required: true }]}
                >
                    <Input
                        onChange={(e) => { setUsername(e.target.value); }}
                    ></Input>
                </Form.Item>

                <Form.Item
                    name='firstPassword'
                    label='password'
                    rules={[{ required: true }]}
                >
                    <Input.Password 
                        onChange={e=>setFirstPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name='reconfirmPassword'
                    label='reconfirm'
                    rules={[{ required: true }]}
                    dependencies={['firstPassword']}
                >
                    <Input.Password
                        onChange={e=>setReconfirmPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                    type="primary"
                        onClick={submit}
                    >Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default Register;