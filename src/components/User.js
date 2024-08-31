import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        //Api calls
    },[])
    return( <div className="m-4 p-4 bg-gray-50 rounded-lg">
        <h2>Name: {name}</h2>
        <h3> Location : Vizag</h3>
        <h3>Contact : harika@gmail.com</h3>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
    )
};

export default User;