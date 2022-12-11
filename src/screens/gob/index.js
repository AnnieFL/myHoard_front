import Header from "../../components/header";
import { Page, Content, MainContent, ProfileCategoriesTitle, ProfileCategories, ProfileCategoriesRow, ProfileCategoriesItem, ProfileCategoriesItemImage, NonLink, ListUsers, ListUsersTitle, ListUsersRow, ListUsersItem, ListUsersCrown, ListUsersPicture, ListUsersName } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { Navigate } from "react-router-dom";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";
import { images } from "../../config/constants";

export default function Gob() {
  const login = useSelector(selectLogin);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!users[0]) {
      (async () => {
        setUsers(await Server.baseGet(`user/list`, login.token));
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
        <Sidenav />
        <MainContent>
          {loading &&
            <Loading/>
          }
          {!loading &&
            <ListUsers>
              <ListUsersTitle>The Gob</ListUsersTitle>
              <ListUsersRow>
                {users[0] && users.map((user, userIndex) => (
                  <NonLink to={`/profile/${user.id == login.id ? "" : user.id}`} key={userIndex}>
                    <ListUsersItem>
                      {user.admin &&
                        <ListUsersCrown title="admin" src={images.crown}/>
                      }
                      <ListUsersPicture src={user.picture} />
                      <ListUsersName>{user.name}</ListUsersName>
                    </ListUsersItem>
                  </NonLink>
                ))}
              </ListUsersRow>
            </ListUsers>
          }
        </MainContent>
      </Content>
    </Page>
  );
}
