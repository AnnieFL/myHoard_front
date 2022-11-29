import Header from "../../components/header";
import IntroPage from "../../components/introPage/introPage";
import { Page, Content, SideBar, MainContent, HomePost, PostHeader, PostProfilePicture, PostTitle, PostContent, PostImage } from "../../styled";
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
        console.log(latestThings);
      })();
    }
  }, [])

  const loadMore = async () => {
    const currentThings = latestThings;
    const newThings = await Server.baseGet(`thing/latest?offset=${offset}`);

    setLatestThings([...currentThings, ...newThings]);
    setOffset(offset + 15);
  }

  return (
    <Page>
      <Header />
      {!login.id &&
        <IntroPage />
      }
      {login.id &&
        <Content>
          <SideBar></SideBar>
          <MainContent>
            {latestThings.map((thing, thingIndex) => (
              <HomePost key={thingIndex}>
                <PostHeader>
                  <PostProfilePicture src={thing.user.picture} />
                  <PostTitle>{thing.user.name} added: {thing.name}</PostTitle>
                </PostHeader>
                <PostContent>
                  <PostImage src={thing.picture} title={`size: ${thing.size}m\nage: ${thing.age} months`} />
                </PostContent>
                <span style={{ color: "white" }}>{thing.category.name}</span>
                <div>report</div>
              </HomePost>
            ))}
          </MainContent>
        </Content>
      }
    </Page>
  );
}
