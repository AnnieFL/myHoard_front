import Header from "../../components/header";
import { Page, Content, MainContent, NonLink, CategoryInfo, CategoryInfoName, CategoryInfoPicture, CategoryInfoItems, ContentMain, CategoryThings, CategoryThingsTitle, CategoryThingsRow, CategoryThingsItem, CategoryThingsImage } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { Navigate, useParams } from "react-router-dom";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";

export default function Categories() {
  const login = useSelector(selectLogin);
  const params = useParams();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);

  const rarityOptions = [
    { value: 1, name: "Common" },
    { value: 2, name: "Normal" },
    { value: 3, name: "Rare" },
    { value: 4, name: "Legendary" },
    { value: 5, name: "God-like" },
  ]

  useEffect(() => {
    if (!category) {
      (async () => {
        setCategory(await Server.baseGet(`/category/details/${params.id}`, login.token));
        setLoading(false);
      })();
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
        {category &&
          <MainContent>
            {loading &&
              <Loading />
            }
            {!loading &&
              <>
                <ContentMain>
                  <CategoryInfo>
                    <CategoryInfoPicture rarity={category.rarity} title={rarityOptions.find((rarity) => rarity.value == category.rarity).name} owned={category.things.length} src={category.picture} />
                    <CategoryInfoName> - {category.name} - (worth {category.points} points)</CategoryInfoName>
                  </CategoryInfo>


                  <CategoryInfo>
                    <CategoryInfoItems>You have {category.things.length} things in this category</CategoryInfoItems>
                  </CategoryInfo>
                </ContentMain>

                <CategoryThings>
                  <CategoryThingsTitle>Your things:</CategoryThingsTitle>
                  <CategoryThingsRow>
                    {category.things[0] && category.things.map((thing, thingIndex) => (
                      <NonLink to={`/thing/${thing.id}`} key={thingIndex}>
                        <CategoryThingsItem>
                          <CategoryThingsImage title={thing.name} src={thing.picture} />
                        </CategoryThingsItem>
                      </NonLink>
                    ))}
                    <NonLink to={"/addThing"} state={{ category: category.id }}>
                      <CategoryThingsItem>
                        <CategoryThingsImage src={"/images/plusSign.png"} />
                      </CategoryThingsItem>
                    </NonLink>
                  </CategoryThingsRow>
                </CategoryThings>
              </>
            }
          </MainContent>
        }
      </Content>
    </Page>
  );
}
