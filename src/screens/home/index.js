import Header from "../../components/header";
import { texts } from "./texts.js";
import { Page, Content, SideBar, HomeTitle, MainContent, ExampleImage, ImagesRow, Image, ImageDesc } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/api";

export default function Home() {
  const login = false;
  const lang = "go";
  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
    if (!topThree[0]) {
      (async () => {
        console.log("A")
        setTopThree(await Server.baseGet("user/top/3"));
      })();
    }
  },[])

  return (
    <Page>
      <Header />
      <Content>
        <SideBar>AA</SideBar>
        {!login &&
          <MainContent>
            <HomeTitle>{texts.collect[lang]}</HomeTitle>
            <ImagesRow>
              <Image>
                <ExampleImage src={"images/item1.png"} />
                <ImageDesc>{texts.bottles[lang]}</ImageDesc>
              </Image>
              <Image>
                <ExampleImage src={"images/item2.png"} />
                <ImageDesc>{texts.chairs[lang]}</ImageDesc>
              </Image>
              <Image>
                <ExampleImage src={"images/item3.png"} />
                <ImageDesc>{texts.pipe[lang]}</ImageDesc>
              </Image>
            </ImagesRow>
            <HomeTitle>{texts.show[lang]}</HomeTitle>
            <ImagesRow>
              {/*topThree.map((user) => (
                <Image>
                  <ExampleImage src={user.picture}/>
                  <ImageDesc>{user.name} - {user.score} {texts.points[lang]}</ImageDesc>
                </Image>
              ))
              */}
            </ImagesRow>
            <HomeTitle>{texts.hoard[lang]}</HomeTitle>
          </MainContent>
        }
        {login &&
          <MainContent></MainContent>
        }
      </Content>
    </Page>
  );
}
