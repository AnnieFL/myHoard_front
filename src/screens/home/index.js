import Header from "../../components/header";
import IntroPage from "../../components/introPage/introPage";
import { Page, Content, SideBar, MainContent } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";

export default function Home() {
  const login = useSelector(selectLogin);
  const [offset, setOffset] = useState(15);
  const [latestThings, setLatestThings] = useState([]);

  useEffect(() => {
    if (!latestThings[0] && login.id) {
      (async () => {
        setLatestThings(await Server.baseGet("thing/latest", login.token));
      })();
    }
  }, [])

  const loadMore = async () => {
    const currentThings = latestThings;
    const newThings = await Server.baseGet(`thing/latest?offset=${offset}`);

    setLatestThings([... currentThings, ... newThings]);
    setOffset(offset + 15);
  }

  return (
    <Page>
      <Header />
      {!login.id &&
        <IntroPage/>
      }
      {login.id &&
        <Content>
          <SideBar></SideBar>
          <MainContent>
            {latestThings.map((thing) => (
              <div>
                <span>{thing.name}</span>
                <div>
                  <img src={thing.picture}/>
                </div>
              </div>
            ))}
          </MainContent>
        </Content>
      }
    </Page>
  );
}
