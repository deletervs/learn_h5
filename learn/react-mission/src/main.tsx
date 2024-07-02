import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import Home from './compoent/home'
import { BrowserRouter } from 'react-router-dom'
import { Col, Row } from 'antd'

ReactDOM.createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>
    <BrowserRouter>
      <Row>
        <Col span={24}>
          <Home/>
        </Col>
      </Row>
    </BrowserRouter>
  </React.StrictMode>,
)
