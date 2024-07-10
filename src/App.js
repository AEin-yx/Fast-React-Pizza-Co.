import { useEffect, useState } from "react";
export default function App(){
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return() =>clearInterval(timer);
    },[]);

    return(<div>
        <h1>The Current time is {time}</h1>
    </div>);
}
