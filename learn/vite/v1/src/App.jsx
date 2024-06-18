import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton_i(){
  const [c,sc] = useState(0);
  const click = ()=>{
    sc(c+1);
  };
  return (
    <button onClick={click}>click {c} times</button>
  );
}

function App() {

  let a = 1, b = 1;
  const list = [
    {id:1, name:'aaa'},
    {id:2, name:'qqq'},
    {id:3, name:'www'},
    {id:4, name:'eee'},
  ];

  return (
    <>
      <div className='outer'>
        <div className="inner">
          hehe {'xixi'} {a}
        <ul>
          {list.map(item =>
            <li key={item.id}>{item.name}</li>
          )}
        </ul>
        {a && <span>xxxxxx</span>}
        <br />
        {b ? <span>yes</span>:<span>no</span>}
        <br />

        <span>individual</span>
        <MyButton_i/>
        <MyButton_i/>
        <br />
        <span>Sync</span>
        </div>
      </div>
    </>
  )
}

export default App
