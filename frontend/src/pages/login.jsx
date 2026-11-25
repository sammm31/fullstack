
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function print() {
    console.log(email, password);
  }

  return (
    <>
      <div className="text-blue-500 text-5xl font-bold">
        HI
      </div>

      <input type="text"
        placeholder="Enter your name"
      />

      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        required
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" onClick={print}>
        Submit
      </button>
    </>
  );
}

export default Login;
