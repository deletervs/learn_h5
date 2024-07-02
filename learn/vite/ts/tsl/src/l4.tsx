import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";


function L4(){
    // const [usename, setUsername]=useState<string|undefined>(undefined);
    // const [password, setPassword]=useState<string|undefined>(undefined);
    const [form]=useForm();

    function onFinish(value:any){
        console.log(value);
    };

    return(
        <>
            <Form
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label='usename'
                    name='usename'
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label='password'
                    name='password'
                    rules={[{required:true}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"                    
                    >
                        submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default L4;