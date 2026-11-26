
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[formdata, setFormdata]= useState({
    username :"",
    password:""
  })
  const navigate=useNavigate();
  function handlechange(e){
    
    setFormdata({
      ... formdata,
      [e.target.name]:e.target.value

   } )
  }

  function print() {
    
    console.log("login page",formdata);
    navigate("/dashboard",{state:formdata})
  }
  {/* function print(){
    console.log(email,password)}
    */}

  return (
    <>
      <div className="text-blue-500 text-5xl font-bold">
        HI
      </div>

      <input type="text"
        placeholder="Enter your name"
      />

      <input
        type="text"
        name="username"
        required
        placeholder="Enter your username"
        
        onChange={handlechange}
      />
      {/* <input type="email" required placeholder="Enter your email" value{email} onChange={(e)=>setEmail(e.target.value)}*/}

      <input
        type="password"
        name="password"
        required
        placeholder="Enter your password"
        
        onChange={handlechange}
      />

      <button type="button" onClick={print}>
        Submit
      </button>
    </>
  );
}

export default Login;
