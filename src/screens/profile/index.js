import Header from "../../components/header";
import { Page, Content, MainContent, ContentMain, ProfileInfo, ProfileInfoPicture, ProfileInfoName, ProfileInfoItems, DemiLink, IconLink, ProfileInfoTitle, ProfileCategoriesTitle, ProfileCategories, ProfileCategoriesRow, ProfileCategoriesItem, ProfileCategoriesItemImage, NonLink, PostReport } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../store/reducer";
import { selectLogin } from "../../store/reducer";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";
import { images } from "../../config/constants";

export default function Profile() {
  const login = useSelector(selectLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [user, setUser] = useState();
  const [points, setPoints] = useState(0);
  const [things, setThings] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!points && !things && !categories[0]) {
      (async () => {
        const info = await Server.baseGet(`user/info/${params.id && params.id !== login.id ? params.id : login.id}`, login.token)

        setUser(info.user)
        setPoints(info.score);
        setThings(info.things);
        setCategories(info.categories);
        setLoading(false);
      })()
    }
  }, [])

  const deleteUser = async () => {
    await Server.baseDelete(`user/delete/${login.id}`, login.token);

    dispatch(setLogout());
    navigate("/");
  }

  return (
    <Page>
      <Header profile />
      {!login.id &&
        <Navigate to={"/"} />
      }
      <Content>
        <Sidenav />
        <MainContent>
          {loading &&
            <Loading />
          }
          {!loading &&
            <>
              <ContentMain>
                <ProfileInfo>
                  <ProfileInfoPicture points={points ? points : 0} src={user.picture} />
                  <ProfileInfoName> - {user.name}<ProfileInfoTitle>{user.admin ? "[admin]" : ""}</ProfileInfoTitle> ({points ? points : 0} points)<IconLink>
                    {(!params.id || params.id == login.id) &&
                      <>
                        <DemiLink to={"/profile/edit"}>🖊️</DemiLink>
                        <span style={{ color: "red", marginLeft: "350px", fontSize: "2em" }}>
                          <DemiLink onClick={() => deleteUser()}>X</DemiLink>
                        </span>
                      </>
                    }
                  </IconLink></ProfileInfoName>
                </ProfileInfo>


                <ProfileInfo>
                  <ProfileInfoItems>{params.id && params.id != login.id ? "Their" : "Your"} hoard has {things} things</ProfileInfoItems>
                </ProfileInfo>
              </ContentMain>

              <ProfileCategories>
                <ProfileCategoriesTitle>Categories</ProfileCategoriesTitle>
                <ProfileCategoriesRow>
                  {(!params.id || params.id === login.id) &&
                    <>
                      {categories[0] && categories.map((category, categoryIndex) => (
                        <NonLink to={`/category/${category.id}`} key={categoryIndex}>
                          <ProfileCategoriesItem rarity={category.rarity}>
                            <ProfileCategoriesItemImage src={category.picture} />
                          </ProfileCategoriesItem>
                        </NonLink>
                      ))}

                      <NonLink to={"/addThing"}>
                        <ProfileCategoriesItem>
                          <ProfileCategoriesItemImage src={images.plusSign} />
                        </ProfileCategoriesItem>
                      </NonLink>
                    </>
                  }

                  {params.id && params.id !== login.id &&
                    <>
                      {things[0] && things.map((thing, thingIndex) => (
                        <NonLink to={`/thing/${thing.id}`} key={thingIndex}>
                          <ProfileCategoriesItem>
                            <ProfileCategoriesItemImage src={thing.picture} />
                          </ProfileCategoriesItem>
                        </NonLink>
                      ))}
                    </>
                  }

                </ProfileCategoriesRow>
              </ProfileCategories>
            </>
          }
        </MainContent>
      </Content>
    </Page>
  );
}
