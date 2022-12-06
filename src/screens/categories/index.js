import Header from "../../components/header";
import { Page, Content, MainContent, ProfileCategoriesTitle, ProfileCategories, ProfileCategoriesRow, ProfileCategoriesItem, ProfileCategoriesItemImage, NonLink } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { Navigate } from "react-router-dom";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";

export default function Categories() {
  const login = useSelector(selectLogin);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categories[0]) {
      (async () => {
        setCategories(await Server.baseGet(`category/list`, login.token));
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
            <ProfileCategories>
              <ProfileCategoriesTitle>Categories</ProfileCategoriesTitle>
              <ProfileCategoriesRow>
                {categories[0] && categories.map((category, categoryIndex) => (
                  <NonLink to={`/category/${category.id}`} key={categoryIndex}>
                    <ProfileCategoriesItem rarity={category.rarity}>
                      <ProfileCategoriesItemImage title={category.name} owned={category.things} src={category.picture} />
                    </ProfileCategoriesItem>
                  </NonLink>
                ))}
              </ProfileCategoriesRow>
            </ProfileCategories>
          }
        </MainContent>
      </Content>
    </Page>
  );
}
