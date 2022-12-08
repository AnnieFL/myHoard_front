import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Sidenav from "../../components/sidebar";
import { selectLogin } from "../../store/reducer";
import { CategoryInfo, CategoryInfoItems, Content, MainContent, Page } from "../../styled";

export default function NonExist(props) {
  const login = useSelector(selectLogin);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!login.id) {
      navigate("/");
    }
  }, [])

  
  return (
    <Page>
      <Header />
      <Content>
      <Sidenav/>
          <MainContent>
                  <CategoryInfo>
                    <CategoryInfoItems>Woops! This page doesn't exist yet!!</CategoryInfoItems>
                  </CategoryInfo>
          </MainContent>
      </Content>
    </Page >
  );
}
