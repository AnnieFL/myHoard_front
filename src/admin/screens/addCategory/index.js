import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Server from "../../../classes/Server";
import Form from "../../../components/form";
import Header from "../../../components/header";
import { Content, Page } from "../../../styled";

import { useSelector } from "react-redux";
import { selectLogin } from "../../../store/reducer";
import Util from "../../../classes/Util";
import Loading from "../../../components/loading";

export default function AddCategory(props) {
  const login = useSelector(selectLogin);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [rarity, setRarity] = useState(0);
  const [points, setPoints] = useState("");
  const [loading, setLoading] = useState(false);

  const rarityOptions = [
    { value: 1, label: "Common" },
    { value: 2, label: "Normal" },
    { value: 3, label: "Rare" },
    { value: 4, label: "Legendary" },
    { value: 5, label: "God-like" },
  ]

  useEffect(() => {
    if (!login.admin) {
      navigate("/");
    }
  }, [])

  const save = async (event) => {
    event.preventDefault();
    setLoading(true);

    const created = await Server.basePost(`category/create`, { name, picture: await Util.toBase64(picture), rarity, points }, login.token)

    if (created.error) {
      alert(created.error.msg);
      return setLoading(false);
    }

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
                { type: "text", value: name, onChange: (value) => setName(value), placeholder: "Name" },
                { type: "number", value: points, onChange: (value) => setPoints(value), placeholder: "Points" },
                { type: "select", value: rarity, options: rarityOptions, onChange: (value) => setRarity(value), placeholder: "Rarity" },
                { type: "file", accept: "image/png, image/jpeg", onChange: (files) => setPicture(files), placeholder: "Picture" }
              ]
            }
            onSubmit={
              (event) => save(event)
            }
            buttonLabel="Add"
          />
        }
      </Content>
    </Page >
  );
}
