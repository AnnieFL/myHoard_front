import Header from "../../components/header";
import { Page, Content, MainContent, DemiLink, HomePost, PostHeader, PostTitle, PostContent, PostImage, PostFooter, PostInfo } from "../../styled";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import Server from "../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../store/reducer";
import { Navigate, useParams } from "react-router-dom";
import Sidenav from "../../components/sidebar";
import Loading from "../../components/loading";

export default function Thing() {
  const login = useSelector(selectLogin);
  const params = useParams();

  const [thing, setThing] = useState();
  const [loading, setLoading] = useState(true);

  const currentTime = dayjs();

  useEffect(() => {
    if (!thing) {
      (async () => {
        setThing(await Server.baseGet(`/thing/details/${params.id}`, login.token));
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
        <Sidenav/>
        <MainContent>
          {loading &&
            <Loading/>
          }
          {thing && !loading &&
            <HomePost>
              <PostHeader>
                <PostTitle>
                  {thing.name}, from <DemiLink to={`/profile${thing.user.id == login.id ? "" : `/${thing.user.id}`}`}>{thing.user.name}</DemiLink>
                </PostTitle>
              </PostHeader>
              <PostContent>
                <PostImage src={thing.picture} />
              </PostContent>
              <PostFooter>
                {!!thing.size &&
                  <PostInfo>Size: {thing.size}m</PostInfo>
                }
                {!!thing.age &&
                  <PostInfo>Age: {currentTime.diff(thing.age, 'month')} months</PostInfo>
                }
                <PostInfo>Category: <DemiLink to={`/category/${thing.category.id}`}>{thing.category.name}</DemiLink></PostInfo>
              </PostFooter>
            </HomePost>
          }
        </MainContent>
      </Content>
    </Page>
  );
}
