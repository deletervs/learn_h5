import React from "react"
import {BrowserRouter, useNavigate, useLocation, Route, Routes} from 'react-router-dom'

function Home(){
    return(
        <>
            <div>Home</div>
        </>
    )
}

function About(){
    return(
        <>
            <div>About</div>          
        </>
    )
}

function Service(){
    const navigate = useNavigate();

    return(
        <>
            <div>Service</div>      
            <ul>
                <li onClick={() => navigate('/services/1')}>Service 1</li>
                <li onClick={() => navigate('/services/2')}>Service 2</li>
            </ul>       
        </>
    )
}

function ServiceNext({id}){
    return(
        <>
            <div>Service: {id}</div>     
            <ul>
                <li onClick={() => navigate('/service/1')}>Service 1</li>
                <li onClick={() => navigate('/service/2')}>Service 2</li>
            </ul>     
        </>
    )
}

function Menu(){
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.pathname);
    
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/service/:id" element={<ServiceNext/>}/>
                </Routes>
                
                <button onClick={()=>navigate("/")}>Home</button>
                <button onClick={()=>navigate("/about")}>About</button>
                <button onClick={()=>navigate("/service")}>Service</button>
            </div>
        </>
    )
}

export default Menu