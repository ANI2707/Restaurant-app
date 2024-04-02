import { useEffect,useState } from "react";

const User = (props) =>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);

    useEffect(()=>{
        //API Calls
        const timer =setInterval(()=>{
            console.log("Namaste React OP");
        },1000);

        console.log("useEffect");


        //For unmounting / clearing the blunder
        return ()=>{
            clearInterval(timer)
            console.log("useEffect Return");
        }
    },[])

    console.log("render");
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location: Pune</h3>
            <h4>Contact: @aniket</h4>

        </div>
    )
}

export default User;