import { useState, useEffect } from "react";

function SearchinTime(){
    const [query, setQuery] = useState("");
    const [answer, setAnswer] = useState([]);
    const data = ['apple/', 'banana/', 'grape/', 'orange/', 'pear/', 'pineapple/'];

    useEffect(()=>{
        if(!query) setAnswer([]);
            else{
                setAnswer(data.filter(i=>i.includes(query)));
            }
    },[query]);

    return (
        <>
            <span>{answer}</span>
            <br />
            <input type="text" value={query} onChange={e=>setQuery(e.target.value)}/>
        </>
    )
}

export default SearchinTime