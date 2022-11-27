import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Server from "../../classes/Server";
import Form from "../../components/form";
import Header from "../../components/header";
import { Content, Page } from "../../styled";

import { useDispatch, useSelector } from "react-redux";
import { selectLogin, setLogin } from "../../store/reducer";

export default function Login(props) {
  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInfo = useSelector(selectLogin);

  const { signup } = location?.state ? location.state : false;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (loginInfo.id) {
      navigate("/");
    }
  }, [])

  const login = async (event) => {
    event.preventDefault();

    const loggedUser = await Server.basePost("user/login", { name: username, password });

    dispatch(setLogin({ token: loggedUser.token, name: loggedUser.user.name, email: loggedUser.user.email, id: loggedUser.user.id, picture: loggedUser.user.picture, admin: loggedUser.user.permissions.includes("ADMIN") ? true : false}));

    navigate("/")
  }

  const signin = async (event) => {
    event.preventDefault();

    const signedUser = await Server.basePost("/user/signin", { name: username, password, email });

    dispatch(setLogin({ token: signedUser.token, name: signedUser.user.name, email: signedUser.user.email, id: signedUser.user.id, picture: signedUser.user.picture, admin: signedUser.user.permissions.includes("ADMIN") ? true : false }));

    navigate("/")
  }

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
