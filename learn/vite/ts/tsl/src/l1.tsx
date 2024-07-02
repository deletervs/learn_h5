import { Col, Row, Button } from "antd"
import React from "react"
import "./l1.css"


function L1() {

    return (
        <>
            <Row className="r1" gutter={3} justify="center">
                <Col span={6} className="d2">
                    <div className="d2">xxx</div>
                </Col>
                <Col span={6} className="d2">
                    <div className="d2">xxx</div>
                </Col>
                <Col span={12} className="d2">
                    <div className="d2">xxx</div>
                </Col>
            </Row>
        </>
    )
};

export default L1;