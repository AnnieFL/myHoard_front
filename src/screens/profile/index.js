import Header from "../../components/header";
import { Page, Content, SideBar, MainContent, ProfileMain, ProfileInfo, ProfileInfoPicture, ProfileInfoName, ProfileInfoItems, DemiLink, IconLink, ProfileInfoTitle, ProfileCategoriesTitle, ProfileCategories } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const login = useSelector(selectLogin);
  const [points, setPoints] = useState(0);
  const [things, setThings] = useState(0);
  const [categories, setCategories] = useState([]);

  return (
    <Page>
      <Header />
      {!login.id &&
        <Navigate to={"/"} />
      }
      <Content>
        <SideBar></SideBar>
        <MainContent>
          <ProfileMain>
            <ProfileInfo>
              <ProfileInfoPicture points={0} src={login.picture} />
              <ProfileInfoName> - {login.name}<ProfileInfoTitle>{login.admin ? "[admin]" : ""}</ProfileInfoTitle> ({points} points)<IconLink><DemiLink to={"/profile/edit"}>🖊️</DemiLink></IconLink></ProfileInfoName>
            </ProfileInfo>


            <ProfileInfo>
              <ProfileInfoItems>You hoard has {things} things</ProfileInfoItems>
            </ProfileInfo>
          </ProfileMain>

          <ProfileCategories>
            <ProfileCategoriesTitle>Categories</ProfileCategoriesTitle>
            {categories[0] && categories.map((category) => (
              <ProfileInfoItems>{category.name}</ProfileInfoItems>
            ))}
            {!categories[0] &&
              <ProfileCategoriesTitle>---<DemiLink to={"/addthing"}>You have nothing, why don't you show us something you own?---</DemiLink></ProfileCategoriesTitle>
            }
          </ProfileCategories>
        </MainContent>
      </Content>
    </Page>
  );
}
