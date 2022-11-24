import Header from "../../components/header";
import { Page, Content, SideBar, HomeTitle, MainContent, ExampleImage, ImagesRow, Image, ImageDesc, DemiLink } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/api";

export default function Home() {
  const login = false;
  const lang = "go";
  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
    if (!topThree[0]) {
      (async () => {
        setTopThree(await Server.baseGet("user/top/3"));
      })();
    }
  },[])

  return (
    <Page>
      <Header />
      <Content>
        <SideBar>
          <DemiLink to="/login">Login</DemiLink>
        </SideBar>
        {!login &&
          <MainContent>
            <HomeTitle>Collect things!</HomeTitle>
            <ImagesRow>
              <Image>
                <ExampleImage src={"images/item1.png"} />
                <ImageDesc>Bottles!!</ImageDesc>
              </Image>
              <Image>
                <ExampleImage src={"images/item2.png"} />
                <ImageDesc>Chairs!!</ImageDesc>
              </Image>
              <Image>
                <ExampleImage src={"images/item3.png"} />
                <ImageDesc>This... thing!</ImageDesc>
              </Image>
            </ImagesRow>
            <HomeTitle>Show it off!</HomeTitle>
            <ImagesRow>
              {/*topThree.map((user) => (
                <Image>
                  <ExampleImage src={user.picture}/>
                  <ImageDesc>{user.name} - {user.score} {texts.points[lang]}</ImageDesc>
                </Image>
              ))
              */}
            </ImagesRow>
            <HomeTitle>And build... Your Hoard!</HomeTitle>
          </MainContent>
        }
        {login &&
          <MainContent></MainContent>
        }
      </Content>
    </Page>
  );
}
