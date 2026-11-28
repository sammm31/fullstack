import {useEffect ,useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    const[count,setCount]= useState(0);
    const[check,setCheck]=useState(3);

    {/*function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }  */}
    useEffect(()=>{
        console.log(count)
    },[check])

    return ( 
        <>
            <button onClick={()=>setCount(count+1)}>button</button>
             
        </>
     );
}

export default Dashboard;