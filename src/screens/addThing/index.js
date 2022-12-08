import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Server from "../../classes/Server";
import Form from "../../components/form";
import Header from "../../components/header";
import { Content, Page } from "../../styled";

import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import Util from "../../classes/Util";
import Loading from "../../components/loading";

export default function AddThing(props) {
  const login = useSelector(selectLogin);
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState(0);
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category[0]) {
      (async () => {
        const categories = await Server.baseGet(`category/list`, login.token);
        categories.unshift({ name: "", value: 0 });

        setCategoriesOptions(categories.map((category) => ({ label: category.name, value: category.id })));
        setLoading(false);
      })();
    }

    if (!login.id) {
      navigate("/");
    }

    if (location.state && location.state.category) {
      setCategory(location.state.category)
    }
  }, [])

  const save = async (event) => {
    event.preventDefault();
    setLoading(true);

    const created = await Server.basePost(`thing/create`, { name, picture: await Util.toBase64(picture), size, age, categoryId: category }, login.token)
    
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
                { type: "number", value: size, onChange: (value) => setSize(value), placeholder: "Size (metric)" },
                { type: "date", value: age, onChange: (value) => setAge(value), placeholder: "Since:" },
                { type: "select", value: category, options: categoriesOptions, onChange: (value) => setCategory(value), placeholder: "Category" },
                { type: "file", accept: "image/png, image/jpeg", onChange: (files) => setPicture(files), placeholder: "Proof in picture" }
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
