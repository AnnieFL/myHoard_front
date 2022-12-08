import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Server from "../../classes/Server";
import Form from "../../components/form";
import Header from "../../components/header";
import { Content, Page } from "../../styled";

import { useDispatch, useSelector } from "react-redux";
import { selectLogin, setLogin } from "../../store/reducer";
import Util from "../../classes/Util";
import Loading from "../../components/loading";

export default function ProfileEdit(props) {
    const login = useSelector(selectLogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!login.id) {
            navigate("/");
        }
    }, [])

    const [name, setName] = useState(login.name);
    const [picture, setPicture] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");


    const save = async (event) => {
        event.preventDefault();
        setLoading(true)

        const changedUser = await Server.basePut(`user/edit/${login.id}`, { name, picture: picture ? await Util.toBase64(picture) : "", password }, login.token);

        if (changedUser.error) {
            alert(changedUser.error.msg);
            await setLoading(false);
        }

        dispatch(setLogin({ token: changedUser.token, name: changedUser.user.name, email: changedUser.user.email, id: changedUser.user.id, picture: changedUser.user.picture, admin: changedUser.user.permissions.includes("ADMIN") ? true : false }))

        navigate(-1);
    }

    return (
        <Page>
            <Header />
            <Content>
                {loading &&
                    <Loading />
                }
                {!loading &&
                    <Form
                        fields={
                            [
                                { type: "text", value: name, onChange: (value) => setName(value), placeholder: "Username" },
                                { type: "password", value: password, onChange: (value) => setPassword(value), placeholder: "Password" },
                                { type: "password", value: passwordRepeat, onChange: (value) => setPasswordRepeat(value), placeholder: "Confirm password" },
                                { type: "file", accept: "image/png, image/jpeg", onChange: (files) => setPicture(files), placeholder: "Profile Picture" }
                            ]
                        }
                        onSubmit={
                            (event) => save(event)
                        }
                        buttonLabel="Edit"
                    />
                }
            </Content>
        </Page >
    );
}
