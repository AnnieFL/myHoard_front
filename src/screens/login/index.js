import { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signIn, setSignIn] = useState(props.signIn ? props.signIn : false);
  
  return (
        <div>Login</div>
    );
}
