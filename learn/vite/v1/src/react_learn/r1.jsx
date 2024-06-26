import { useState } from 'react';
// import {useImmer} from 'use-immer';
import { useEffect } from 'react';
import './r1.css'

function Timer(){

    const [count,setCount] = useState(5);

    //timer
    useEffect(()=>{
        console.log("finish render")
        const startTimer = setTimeout(() => {

            console.log("start countdown")
            const timer = setInterval(() => {
                setCount((c)=>c-1);
            }, 1000);//decrease 1/s

            return()=>{
                clearInterval(timer);
            }
            
        }, 2000);//later 2s start timer

    },[]);

    //reset count
    useEffect(()=>{
        if(count<=0) setCount(5);
    },[count]);

    return (
        <>
            <div className='outer'>
                <span>timer: {count}</span>
            </div>
        </>
    );
}

export default Timer