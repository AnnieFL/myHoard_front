import { useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../../components/form";
import Header from "../../components/header";
import { Content, Page } from "../../styled";

export default function Login(props) {
  const location = useLocation()
  const { signup } = location?.state ? location.state : false;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = (event) => {
    event.preventDefault();

    console.log(username)
    console.log(password)
  }

  const signin = (event) => {
    event.preventDefault();

    console.log(username)
    console.log(password)
    console.log(email)
  }

  console.log(signup)
  return (
    <Page>
      <Header />
      <Content>
          {!signup &&
            <Form
              fields={
                [
                  { type: "text", value: username, onChange: (value) => setUsername(value), placeholder: "username" },
                  { type: "password", value: password, onChange: (value) => setPassword(value), placeholder: "password" }
                ]
              }
              onSubmit={
                (event) => login(event)
              }
              buttonLabel="Login"
              login={true}
            />}
          {signup &&
            <Form
              fields={
                [
                  { type: "text", value: username, onChange: (value) => setUsername(value), placeholder: "username" },
                  { type: "email", value: email, onChange: (value) => setEmail(value), placeholder: "email" },
                  { type: "password", value: password, onChange: (value) => setPassword(value), placeholder: "password" }
                ]
              }
              onSubmit={
                (event) => signin(event)
              }
              buttonLabel="Sign up"
              signup={true}
            />}
      </Content>
    </Page >
  );
}
