import Header from "../../components/header";
import { Page, Content, MainContent, NonLink, CategoryThingsTitle, CategoryThingsRow, CategoryThingsItem, CategoryThingsImage, CategoryThings } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { Navigate } from "react-router-dom";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";
import { images } from "../../config/constants";

export default function YourHoard() {
  const login = useSelector(selectLogin);
  
  const [things, setThings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!things[0]) {
      (async () => {
        setThings(await Server.baseGet(`thing/list`, login.token));
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
            <Loading />
          }
          {!loading &&
            <>
              <CategoryThings>
                <CategoryThingsTitle>Your things:</CategoryThingsTitle>
                <CategoryThingsRow>
                  {things[0] && things.map((thing, thingIndex) => (
                    <NonLink to={`/thing/${thing.id}`} key={thingIndex}>
                      <CategoryThingsItem>
                        <CategoryThingsImage title={thing.name} src={thing.picture} />
                      </CategoryThingsItem>
                    </NonLink>
                  ))}
                  <NonLink to={"/addThing"}>
                    <CategoryThingsItem>
                      <CategoryThingsImage src={images.plusSign} />
                    </CategoryThingsItem>
                  </NonLink>
                </CategoryThingsRow>
              </CategoryThings>
            </>}
        </MainContent>
      </Content>
    </Page>
  );
}
