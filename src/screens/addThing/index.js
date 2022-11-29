import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Server from "../../classes/Server";
import Form from "../../components/form";
import Header from "../../components/header";
import { Content, Page } from "../../styled";

import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import Util from "../../classes/Util";

export default function AddThing(props) {
  const login = useSelector(selectLogin);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState(0);
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [picture, setPicture] = useState("");

  useEffect(() => {
    if (!category[0]) {
      (async () => {
        const categories = await Server.baseGet(`category/list`, login.token);
        categories.unshift({name: "", value: 0});
        
        setCategoriesOptions(categories.map((category) => ({label: category.name, value: category.id})));
      })();
    }

    if (!login.admin) {
      navigate("/");
    }
  }, [])

  const save = async (event) => {
    event.preventDefault();

    const created = await Server.basePost(`thing/create`, { name, picture: await Util.toBase64(picture), size, age, categoryId: category }, login.token)
    console.log(created);
  }

  return (
    <Page>
      <Header />
      <Content>
        <Form
          fields={
            [
              { type: "text", value: name, onChange: (value) => setName(value), placeholder: "Name" },
              { type: "number", value: size, onChange: (value) => setSize(value), placeholder: "Size (metric)" },
              { type: "number", value: age, onChange: (value) => setAge(value), placeholder: "Age (in months)" },
              { type: "select", value: category, options: categoriesOptions, onChange: (value) => setCategory(value), placeholder: "Category" },
              { type: "file", accept: "image/png, image/jpeg", onChange: (files) => setPicture(files), placeholder: "Proof in picture" }
            ]
          }
          onSubmit={
            (event) => save(event)
          }
          buttonLabel="Add"
        />
      </Content>
    </Page >
  );
}
