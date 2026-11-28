import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Login() {
  //const[email, setEmail] = useState("")
  //const[pass, setPass] = useState("")
  const navigate = useNavigate();
  const[logindata, setLogindata] = useState({
    username:"",
    password:""
  })
  const location=useLocation();
  const registerdata=location.state;

  function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
    })
  }

  const handlesubmit = (event)=>{
    event.preventDefault();
    console.log("login data",logindata)
    console.log("register data",registerdata)
   if (logindata.username=== registerdata.name && logindata.password === registerdata.password)
    navigate("/dashboard",{
      state:logindata
    })
    else{
      
      console.log("invalid");
    }
  }
    return ( 
    <>
      <div  className ="min-h-screen flex justify-center items-center bg-yellow-100 "> </div>
      <div>Login</div>
      
      {/*}
      <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
      <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
      <button type="submit" onClick={()=>print()}>Submit</button>
      */}
      
      <form onSubmit={handlesubmit} 
      className="bg-white w-96 p-8 rounded-xl shadow-lg space-y-4 border-2 border-black"
            >
        <input type="text" required placeholder="Enter your username" name="username"  onChange={handlechange}/>
        <input type="password" required placeholder="Enter your password" name="password" onChange={handlechange }/>
        <button type="submit" >Submit</button>
      </form>
    </>
    
     );
}

export default Login;