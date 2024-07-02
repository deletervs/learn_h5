import { Button, Col, Row } from 'antd';
import 'antd/dist/antd.dark.min.css'
import Login from './login'
import Register from './register'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

export default function Home() {

    const navigator = useNavigate();

    return (
        <>
            <Row>
                <Col span={12} offset={8}>
                    <Routes>
                        <Route
                            path='/Login'
                            element={<Login></Login>}
                        ></Route>
                        <Route
                            path='/Register'
                            element={<Register></Register>}
                        ></Route>
                    </Routes>
                    <Button onClick={() => { navigator('/Login') }}>to Login</Button>
                    <Button onClick={() => { navigator('/Register') }}>to Register</Button>
                </Col>
            </Row>
        </>
    )
};

