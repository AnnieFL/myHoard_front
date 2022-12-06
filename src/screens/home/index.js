import Header from "../../components/header";
import IntroPage from "../../components/introPage/introPage";
import { Page, Content, SideBar, MainContent, HomePost, PostHeader, PostProfilePicture, PostTitle, PostContent, PostImage, PostReport, DemiLink } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { colors } from "../../config/constants";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";

export default function Home() {
  const login = useSelector(selectLogin);

  const [offset, setOffset] = useState(15);
  const [latestThings, setLatestThings] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentTime = dayjs();

  useEffect(() => {
    if (!latestThings[0] && login.id) {
      (async () => {
        setLatestThings(await Server.baseGet("thing/latest", login.token));
        setLoading(false);
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
          <Sidenav />
          <MainContent>
            {loading &&
              <Loading />
            }
            {!loading && latestThings.map((thing, thingIndex) => (
              <HomePost key={thingIndex}>
                <PostHeader>
                  <PostProfilePicture src={thing.user.picture} />
                  <PostTitle>
                    <DemiLink to={`/profile${thing.user.id == login.id ? "" : `/${thing.user.id}`}`}>{thing.user.name}</DemiLink> added: <DemiLink to={`/thing/${thing.id}`}>{thing.name}</DemiLink> into <DemiLink to={`/category/${thing.category.id}`}>{thing.category.name}</DemiLink>
                  </PostTitle>
                  <PostReport color={colors.letter}><DemiLink>🏳️</DemiLink></PostReport>
                </PostHeader>
                <PostContent>
                  <PostImage src={thing.picture} title={`${!!thing.size ? `size: ${thing.size}m\n` : ""}${!!thing.age ? `age : ${currentTime.diff(thing.age, 'month')} months` : ""}`} />
                </PostContent>
              </HomePost>
            ))}
          </MainContent>
        </Content>
      }
    </Page>
  );
}
