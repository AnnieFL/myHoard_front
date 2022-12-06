import Header from "../../components/header";
import { Page, Content, MainContent, ContentMain, ProfileInfo, ProfileInfoPicture, ProfileInfoName, ProfileInfoItems, DemiLink, IconLink, ProfileInfoTitle, ProfileCategoriesTitle, ProfileCategories, ProfileCategoriesRow, ProfileCategoriesItem, ProfileCategoriesItemImage, NonLink } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { Navigate } from "react-router-dom";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";

export default function Profile() {
  const login = useSelector(selectLogin);
  const [points, setPoints] = useState(0);
  const [things, setThings] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!points && !things && !categories[0]) {
      (async () => {
        const info = await Server.baseGet(`user/info/${login.id}`, login.token)

        setPoints(info.score);
        setThings(info.things);
        setCategories(info.categories);
        setLoading(false);
      })()
    }
  }, [])

  return (
    <Page>
      <Header />
      {!login.id &&
        <Navigate to={"/"} />
      }
      <Content>
        <Sidenav/>
        <MainContent>
          {loading &&
            <Loading/>
          }
          {!loading &&
          <>
          <ContentMain>
            <ProfileInfo>
              <ProfileInfoPicture points={points ? points : 0} src={login.picture} />
              <ProfileInfoName> - {login.name}<ProfileInfoTitle>{login.admin ? "[admin]" : ""}</ProfileInfoTitle> ({points ? points : 0} points)<IconLink><DemiLink to={"/profile/edit"}>🖊️</DemiLink></IconLink></ProfileInfoName>
            </ProfileInfo>


            <ProfileInfo>
              <ProfileInfoItems>You hoard has {things} things</ProfileInfoItems>
            </ProfileInfo>
          </ContentMain>

          <ProfileCategories>
            <ProfileCategoriesTitle>Categories</ProfileCategoriesTitle>
            <ProfileCategoriesRow>
              {categories[0] && categories.map((category, categoryIndex) => (
                <NonLink to={`/category/${category.id}`} key={categoryIndex}>
                  <ProfileCategoriesItem rarity={category.rarity}>
                    <ProfileCategoriesItemImage src={category.picture} />
                  </ProfileCategoriesItem>
                </NonLink>
              ))}
              <NonLink to={"/addThing"}>
                <ProfileCategoriesItem>
                  <ProfileCategoriesItemImage src={"/images/plusSign.png"} />
                </ProfileCategoriesItem>
              </NonLink>
            </ProfileCategoriesRow>
          </ProfileCategories>
          </>
            }
        </MainContent>
      </Content>
    </Page>
  );
}
